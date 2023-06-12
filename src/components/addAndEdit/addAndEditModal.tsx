import { Button, Modal, Form, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { editUser, addUser } from "../../app/users/slice";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
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
  } else form.setFieldsValue({ name: "", email: "", phone: "" });

  const onAddSubmit = () => {
    // form.setFieldsValue('')
    const nameValue = form.getFieldValue("name");
    const emailValue = form.getFieldValue("email");
    const phoneValue = form.getFieldValue("phone");

    const user = {
      id: Math.random(),
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
    };

    if (user.name && user.email && user.phone) {
      dispatch(addUser(user));
      setIsModalOpen(false);
    }
  };

  const onEditSubmit = () => {
    const values = form.getFieldsValue();
    values.id = record.id;
    setIsModalOpen(false);
    dispatch(editUser(values));
  };

  return (
    <>
      <Modal
        footer={null}
        title={operation === "add" ? "Add User" : "Edit User"}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          {...layout}
          name="nest-messages"
          //   onFinish={onFinish}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item name={["name"]} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={["email"]}
            label="Email"
            rules={[{ type: "email", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["phone"]}
            label="Phone"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 14 }}>
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
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddAndEdit;
