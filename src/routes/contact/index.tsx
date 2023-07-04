import React from "react";
import { Button, Form, Input, Typography, Space, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Foooter from "../../components/footer";
import { StyledArrowLeftOutlined, StyledPageHeader } from "../about/styles";
import { StyledText, StyledForm } from "./styles";
import { Helmet } from "react-helmet-async";
const Text = Typography;
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
  <>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <StyledPageHeader
      title={
        <>
          <Link to="/">
            <StyledArrowLeftOutlined />
          </Link>{" "}
          Contact
        </>
      }
    />
    <Divider />
    <StyledText>Get in Touch!</StyledText>
    <StyledForm
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
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
    </StyledForm>
    <Foooter margintop="480px" />
  </>
);

export default Contact;
