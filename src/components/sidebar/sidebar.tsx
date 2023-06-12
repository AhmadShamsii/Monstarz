import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  BarChartOutlined,
  DribbbleOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const Sidebar = () => {
  const location = useLocation();

  const handleClick = (e) => {
    // No need to do anything here, the default behavior will be handled by Ant Design
  };
  return (
    <Layout>
      <Sider
        width={240}
        style={{
          height: "100vh",
          position: "fixed",
          backgroundColor: "#f8f9fa",
          paddingTop: "80px",
          fontSize: "20px",
        }}
      >
        <Menu
          style={{
            fontSize: "15.5px",
            backgroundColor: "#f8f9fa",
          }}
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={handleClick}
        >
          <Menu.Item
            style={{ backgroundColor: "white" }}
            key="/analytics"
            icon={<BarChartOutlined />}
          >
            <Link to="/analytics">Dashboard</Link>
          </Menu.Item>
          <Menu.Item
            style={{ backgroundColor: "white" }}
            key="/analytics/products"
            icon={<DribbbleOutlined />}
          >
            <Link to="/analytics/products">Products</Link>
          </Menu.Item>
          <Menu.Item
            style={{ backgroundColor: "white" }}
            key="/analytics/category"
            icon={<DatabaseOutlined />}
          >
            <Link to="/analytics/category">Category</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};
export default Sidebar;
