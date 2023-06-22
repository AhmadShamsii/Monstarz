import { Button, Modal, Form, Input, Space, Select, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import UploadImage from "../uploadImage.tsx";
import EditImage from "../editImage";
import { addUser, editUser } from "../../app/users/slice";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
// `${record.name?.title} ${record.name?.first} ${record.name?.last}`
const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "${name} is not a valid email!",
  },
};

const Text = Typography;

const AddAndEditCustomer = ({
  users,
  isModalOpen,
  setIsModalOpen,
  operation,
  record,
}) => {
  const fullName = `${record.name?.title} ${record.name?.first} ${record.name?.last}`;
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [name, setName]: any = useState("");
  const [nameValue, setNameValue]: any = useState("");
  const [newUser, setNewUser]: any = useState([]);
  const [editedUser, setEditedUser]: any = useState([]);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const showNameModal = () => {
    setIsNameModalOpen(true);
  };
  const handleNameModalOk = () => {
    setIsNameModalOpen(false);
  };
  const handleNameModalCancel = () => {
    setIsNameModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (operation === "edit") {
      form.setFieldsValue({
        FullName: fullName,
        Email: record.email,
        City: record.location.city,
        Country: record.location.country,
        Upload: record.picture.medium,
      });
    } else if (operation === "add") {
      form.resetFields();
    }
  }, [operation, isModalOpen]);

  const handleName = (values) => {
    const stringValues = Object.values(values).filter(
      (value) => typeof value === "string"
    );
    const joinedString = stringValues.join(" ");

    if (values) {
      setNameValue(values);
      setName(joinedString);
      handleNameModalOk();
    }
  };

  const [month, day, year] = new Date().toLocaleDateString().split("/");

  const handleAddUser = (data) => {
    const newUser = {
      name: {
        title: nameValue.title,
        first: nameValue.firstName,
        last: nameValue.lastName,
      },
      email: form.getFieldValue("Email"),
      location: {
        city: form.getFieldValue("City"),
        country: form.getFieldValue("Country"),
      },

      registered: {
        date: new Date(`${year}-${month}-0${day}`).toISOString().split("T")[0],
      },
      picture: {
        medium: data ? data : record?.picture?.medium,
      },
      login: {
        uuid: Math.random(),
      },
    };
    setNewUser(newUser);
  };

  const onAddSubmit = (e) => {
    if (
      newUser.email &&
      newUser.location &&
      newUser.registered &&
      newUser.picture
    ) {
      dispatch(addUser(newUser));
      setIsModalOpen(false);
      setName("");
    }
  };

  const handleEditUser = (data) => {
    const editedUser = {
      name: {
        title: form.getFieldValue("FullName")?.split(" ")[0],
        first: form.getFieldValue("FullName")?.split(" ")[1]
          ? form.getFieldValue("FullName")?.split(" ")[1]
          : "",
        last: form.getFieldValue("FullName")?.split(" ")[2]
          ? form.getFieldValue("FullName")?.split(" ")[2]
          : "",
      },
      email: form.getFieldValue("Email"),
      location: {
        city: form.getFieldValue("City"),
        country: form.getFieldValue("Country"),
      },
      registered: {
        date: record.registered.date.slice(
          0,
          record.registered.date.indexOf("T")
        ),
      },
      picture: {
        medium: data ? data : record.picture.medium,
      },
      login: {
        uuid: record.login.uuid,
      },
    };
    setEditedUser(editedUser);
  };
  const onEditSubmit = () => {
    dispatch(editUser(editedUser));
    setIsModalOpen(false);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <Modal
        footer={null}
        title={operation === "add" ? "Add Customer" : "Edit Customer"}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          {...layout}
          style={{
            width: "120%",
            marginLeft: "10%",
          }}
          validateMessages={validateMessages}
        >
          {operation === "add" ? (
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="Name"
              label="Name"
            >
              <Input disabled value={name} />
              <>
                <Button onClick={showNameModal} type="link">
                  <Text
                    style={{
                      position: "relative",
                      top: "-63px",
                      left: "230px",
                      color: "blue",
                    }}
                  >
                    <PlusCircleOutlined /> Click to Add Name
                  </Text>
                </Button>
                <Modal
                  footer={null}
                  title="Add Name"
                  open={isNameModalOpen}
                  onOk={handleNameModalOk}
                  onCancel={handleNameModalCancel}
                  style={{
                    top: 170,
                  }}
                  width={450}
                >
                  <Form
                    initialValues={{ title: "Mr" }}
                    onFinish={handleName}
                    layout="vertical"
                    style={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <Form.Item name="title">
                      <Select
                        style={{ width: "70px" }}
                        placeholder="Category"
                        onSearch={onSearch}
                        options={[
                          {
                            value: "Mr",
                            label: "Mr",
                          },
                          {
                            value: "Ms",
                            label: "Ms",
                          },
                          {
                            value: "Mrs",
                            label: "Mrs",
                          },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Enter First Name!",
                        },
                      ]}
                      name="firstName"
                    >
                      <Input
                        placeholder="First Name"
                        style={{ width: "160px" }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Enter Last Name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Last Name"
                        style={{ width: "160px" }}
                      />
                    </Form.Item>
                    <Form.Item
                      style={{
                        position: "relative",
                        right: "160px",
                        bottom: "-71px",
                      }}
                    >
                      <Space>
                        <Button onClick={handleNameModalCancel}>Cancel</Button>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                  <Text style={{ color: "white" }}>.</Text>
                  <Text style={{ color: "white" }}>.</Text>
                </Modal>
              </>
            </Form.Item>
          ) : (
            <Form.Item name={["FullName"]} label="Full Name">
              <Input />
            </Form.Item>
          )}

          {/* 
          
          
          
          
          
          
          
          */}
          <Form.Item
            name="Email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Space>
            <Form.Item
              style={{ width: "145%" }}
              name="City"
              label="City"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              style={{ width: "145%" }}
              name="Country"
              label="Country"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Space>
          {operation === "add" ? (
            <UploadImage handleAddUser={handleAddUser} />
          ) : (
            <EditImage
              editedUser={editedUser}
              handleEditUser={handleEditUser}
              record={record}
            />
          )}

          <Form.Item wrapperCol={{ offset: 14 }}>
            <Space style={{ position: "absolute", left: "-110px" }}>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button
                onClick={operation === "add" ? onAddSubmit : onEditSubmit}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddAndEditCustomer;
