import React from "react";
import { Button, Form, Input, Typography, PageHeader, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Foooter from "../../components/footer/footer";
const Text = Typography
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

const Contact: React.FC = () => (
  <div style={{ marginTop: "110px" }}>
    <Link to="/">
      <ArrowLeftOutlined
        style={{
          fontSize: "16px",
          position: "absolute",
          top: "149px",
          left: "10%",
          color: "black",
        }}
      />
    </Link>
    <PageHeader
      className="font-family-tertiary"
      title="Contact"
      style={{ marginTop: "113px", marginLeft: "10.5%" }}
    />
    <Divider />
    <Text className="font-family-tertiary"
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "25px"
      }}
    >
      Get in Touch!
    </Text>
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        position: "absolute",
        left: "45%",
        transform: "translateX(-50%)",
        width: "50%",
        marginTop: "70px",
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        rules={[{ required: true }]}
        name={["user", "introduction"]}
        label="Message"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <Foooter margintop="480px" />
  </div>
);

export default Contact;
