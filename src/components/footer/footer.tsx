import { Space, Typography, Button, Input, Form } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const Text = Typography;
const Title = Typography;
const Foooter = ({ margintop }) => {
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };
  return (
    <Space
      style={{
        backgroundColor: "#0d3b66",
        width: "100%",
        padding: "5% 11% 100px 11%",
        marginTop: `${margintop}`,
        fontSize: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "210px",
          marginRight: "70px",
        }}
      >
        <Space style={{ marginBottom: "10px", color: "#F6F2F8" }}>
          <EnvironmentOutlined />
          <Text style={{ color: "#F6F2F8" }}>Islamabad, Pakistan</Text>
        </Space>
        <Space style={{ marginBottom: "10px", color: "#F6F2F8" }}>
          <MailOutlined />
          <Text style={{ color: "#F6F2F8" }}>ahmaddshamsii@gmail.com</Text>
        </Space>
        <Space style={{ color: "#F6F2F8" }}>
          <PhoneOutlined />
          <Text style={{ color: "#F6F2F8" }}>03145445663</Text>
        </Space>
      </div>
      <div
        style={{
          marginRight: "70px",
        }}
      >
        <Title
          style={{ fontSize: "18px", fontWeight: "bold", color: "#F6F2F8" }}
        >
          Information
        </Title>
        <Link to="/about">
          <Text style={{ color: "#F6F2F8", margin: "5px 0" }}>About Us</Text>
        </Link>
        <Link to="/">
          <Text style={{ color: "#F6F2F8", marginBottom: "5px" }}>
            Privacy Policy
          </Text>
        </Link>
        <Link to="/">
          <Text style={{ color: "#F6F2F8" }}>Terms & Conditions</Text>
        </Link>
      </div>
      <div
        style={{
          marginRight: "70px",
        }}
      >
        <Title
          style={{ fontSize: "18px", fontWeight: "bold", color: "#F6F2F8" }}
        >
          Customer Services
        </Title>
        <Link to="/">
          <Text style={{ color: "#F6F2F8", margin: "5px 0" }}>FAQs</Text>
        </Link>
        <Link to="contact">
          <Text style={{ color: "#F6F2F8", marginBottom: "5px" }}>
            Conatct Us
          </Text>
        </Link>
        <Link to="/">
          <Text style={{ color: "#F6F2F8" }}>Return & Exchange Policy</Text>
        </Link>
      </div>
      <div>
        <Title
          style={{ fontSize: "18px", fontWeight: "bold", color: "#F6F2F8" }}
        >
          Newsletter Signup
        </Title>
        <Text style={{ color: "#F6F2F8", margin: "5px 0" }}>
          Subscribe to our newsletter to get latest updates!
        </Text>
        <Space.Compact
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Input
            type="email"
            style={{
              borderRadius: "40px 0 0 40px",
              height: "40px",
              border: "1px solid black",
            }}
            placeholder="Your email address"
          />

          <Button
            htmlType="submit"
            style={{
              borderRadius: " 0 40px 40px 0",
              height: "40px",
              backgroundColor: "#0d3b66",
              color: "#F6F2F8",
            }}
          >
            Subscribe
          </Button>
        </Space.Compact>
      </div>
    </Space>
  );
};
export default Foooter;
