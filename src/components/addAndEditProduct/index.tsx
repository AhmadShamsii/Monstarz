import { Button, Modal, Form, Input, Space, Select, Divider } from "antd";
import { useDispatch } from "react-redux";
import { editProduct, addProduct } from "../../app/products/slice";

import { StyledFormItem, StyledFormButtons } from "./styles";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const AddAndEdit = ({
  users,
  isModalOpen,
  setIsModalOpen,
  operation,
  record,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (operation === "edit") {
    form.setFieldsValue({
      name: `${record.first_name} ${record.last_name}`,
      email: record.email,
      phone: record.phone,
    });
  } else form.resetFields();

  const onAddSubmit = () => {
    const nameValue = form.getFieldValue("name")?.split(" ");
    const firstNameValue = nameValue?.[0];
    const lastNameValue = nameValue?.[1];
    const emailValue = form.getFieldValue("email");
    const phoneValue = form.getFieldValue("phone");
    const categoryValue = form.getFieldValue("Category");

    let userId;
    if (categoryValue === "monster") {
      userId = (Math.random() * 9).toFixed(5);
      console.log(userId);
    } else if (categoryValue === "robot") {
      console.log(userId);
      userId = (Math.random() * 15 + 10).toFixed(5);
    } else if (categoryValue === "avatar") {
      console.log(userId);
      userId = (Math.random() * (32 - 25) + 25).toFixed(5);
    } else if (categoryValue === "roboHead") {
      console.log(userId);

      userId = (Math.random() * (40 - 32) + 32).toFixed(5);
    }

    const user = {
      id: userId,
      first_name: firstNameValue,
      last_name: lastNameValue || "",
      email: emailValue,
      phone: phoneValue,
      category: categoryValue,
    };

    if (user.email && user.phone && categoryValue) {
      dispatch(addProduct(user));
      setIsModalOpen(false);
    }
  };

  const onEditSubmit = () => {
    const nameValue = form.getFieldValue("name").split(" ");
    const firstNameValue = nameValue[0];
    const lastNameValue = nameValue[1];
    const emailValue = form.getFieldValue("email");
    const phoneValue = form.getFieldValue("phone");

    const user = {
      id: "",
      first_name: firstNameValue,
      last_name: lastNameValue || "",
      email: emailValue,
      phone: phoneValue,
    };

    user.id = record.id;

    setIsModalOpen(false);
    dispatch(editProduct(user));
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <Modal
        footer={null}
        title={operation === "add" ? "Add Product" : "Edit Product"}
        open={isModalOpen}
        onCancel={handleCancel}
        width={450}
      >
        <Form
          form={form}
          {...layout}
          validateMessages={validateMessages}
          layout="vertical"
        >
          <StyledFormItem
            name={["name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </StyledFormItem>
          <StyledFormItem
            name={["email"]}
            label="Email"
            rules={[{ type: "email", required: true }]}
          >
            <Input />
          </StyledFormItem>
          <StyledFormItem
            name={["phone"]}
            label="Phone"
            rules={[{ required: true }]}
          >
            <Input />
          </StyledFormItem>
          {operation === "add" ? (
            <Form.Item
              style={{ width: "200px" }}
              name={["Category"]}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Category"
                onSearch={onSearch}
                options={[
                  {
                    value: "monster",
                    label: "Monster",
                  },
                  {
                    value: "robot",
                    label: "Robot",
                  },
                  {
                    value: "avatar",
                    label: "Avatar",
                  },
                  {
                    value: "roboHead",
                    label: "Robo Head",
                  },
                ]}
              />
            </Form.Item>
          ) : (
            ""
          )}
          <Divider />

          <StyledFormButtons>
            <Space>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button
                onClick={operation === "add" ? onAddSubmit : onEditSubmit}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Space>
          </StyledFormButtons>
        </Form>
      </Modal>
    </>
  );
};

export default AddAndEdit;
