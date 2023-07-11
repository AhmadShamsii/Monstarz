import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  BarChartOutlined,
  DribbbleOutlined,
  DatabaseOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { StyledSider, StyledMenu, StyledMenuItem } from "./styles";

const Sidebar = () => {
  const location = useLocation();

  const handleClick = (e) => {
    //
  };
  return (
    <Layout>
      <StyledSider width={240}>
        <StyledMenu
          mode="inline"
          // selectedKeys={[location.pathname]}
          onClick={handleClick}
        >
          <StyledMenuItem key="/analytics" icon={<BarChartOutlined />}>
            <Link to="/analytics">Dashboard</Link>
          </StyledMenuItem>
          <StyledMenuItem key="/analytics/products" icon={<DribbbleOutlined />}>
            <Link to="/analytics/products">Products</Link>
          </StyledMenuItem>
          <StyledMenuItem key="/analytics/customers" icon={<UserOutlined />}>
            <Link to="/analytics/customers">Customers</Link>
          </StyledMenuItem>
          <StyledMenuItem key="/analytics/orders" icon={<DatabaseOutlined />}>
            <Link to="/analytics/orders">Orders</Link>
          </StyledMenuItem>
        </StyledMenu>
      </StyledSider>
    </Layout>
  );
};
export default Sidebar;
