import styled from "styled-components";
import { Card, Layout, Space, Typography, Menu } from "antd";
import { HeartFilled } from "@ant-design/icons";
const { Text, Title } = Typography;
const { Sider } = Layout;

export const StyledSider = styled(Sider)`
  height: 100vh;
  position: fixed;
  background-color: white;
  padding-top: 80px;
  font-size: 20px;
`;
export const StyledMenu = styled(Menu)`
font-size: 15.5px
background-color: white
`;
export const StyledMenuItem = styled(Menu.Item)`
  background-color: #f8f9fa;
  color: white;

  &:focus {
    background-color: #f8f9fa;
  }
  &:hover {
    background-color: #f8f9fa;
  }
  &:active {
    background-color: #f8f9fa;
  }
`;
