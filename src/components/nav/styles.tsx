import styled from "styled-components";
import { Menu, Layout, Typography, Space, Dropdown, Button, Badge } from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  CloseCircleOutlined,
  HeartFilled,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Text, Title } = Typography;

export const StyledMenuItem = styled(Menu.Item)`
  display: flex;
  width: 230px;
  font-size: 15px;
  margin: 10px 0;
  color: #0d3b66;
`;
export const StyledCaretUpOutlined = styled(CaretUpOutlined)`
  position: absolute;
  right: 35px;
  top: 4px;
`;
export const StyledCaretDownOutlined = styled(CaretDownOutlined)`
  position: absolute;
  right: 35px;
  top: 15px;
`;
export const StyledCloseCircleOutlined = styled(CloseCircleOutlined)`
  position: absolute;
  right: 10px;
  top: 9px;
`;
export const StyledMenuItem2 = styled(Menu.Item)`
  width: 200px;
  font-size: 15px;
`;
export const StyledNavHeartFilled = styled(HeartFilled)`
  position: absolute;
  right: 10px;
  top: 9px;
`;
export const StyledHeader = styled(Header)`
  padding: 0px;
  position: fixed;
  z-index: 110;
  width: 100%;
  background-color: #0d3b66;
  margin: 0px;
`;
export const StyledLogo = styled(Text)`
  font-size: 30px;
  position: absolute;
  left: 10%;
  color: #f8f9fa;
  font-family: "Bigelow Rules", cursive;
`;
export const StyledNavItems = styled(Space)`
  display: flex;
  font-size: 25px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 10px;
  font-family: "Bigelow Rules", cursive;
`;
export const StyledDropdown1 = styled(Dropdown)`
  position: fixed;
  top: 0px;
  right: 10%;
`;
export const StyledDropdown2 = styled(Dropdown)`
  position: fixed;
  top: 17px;
  right: 11%;
`;
export const StyledDropdown3 = styled(Dropdown)`
  position: fixed;
  top: 15px;
  right: 10%;
`;
export const StyledMenu = styled(Menu)`
  border-radius: 5px;
  background-color: #f8f9fa;
`;
export const StyledDropdownTitle1 = styled(Title)`
  font-weight: bold;
  padding-left: 12px;
  padding-top: 10px;
  font-family: "Aoboshi One", serif;
`;
export const StyledDropdownTitle2 = styled(Title)`
  font-size: 18px;
  padding-left: 12px;
  padding-top: 10px;
  font-family: "Aoboshi One", serif;
`;
export const StyledButtonDropdown1 = styled(Button)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0d3b66;
  color: white;
  &:hover {
    background-color: #0d3b66;
    color: white;
  }
  &:focus {
    background-color: #0d3b66;
    color: white;
  }
`;
export const StyledUserOutlined = styled(UserOutlined)`
  font-size: 24px;
  color: #f8f9fa;
  margin-right: 75px;
  margin-top: 15px;
  /* position: relative; */
  /* right: 110%; */
`;
export const StyledEmptyHeartFilled = styled(HeartFilled)`
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: #dee2e6;
`;
export const StyledEmptyText = styled(Text)`
  display: flex;
  justify-content: center;
  color: gray;
`;
export const StyledHeartOutlined = styled(HeartOutlined)`
  font-size: 24px;
  color: #f8f9fa;
  margin-right: 20px;
`;
export const StyledCartClearAll = styled(Button)`
  position: absolute;
  right: 15px;
  top: 8px;
  font-size: 12px;
  padding: 0px 5px;
  background-color: #0d3b66;
  color: white;
  &:hover {
    background-color: #0d3b66;
    color: white;
  }
  &:focus {
    background-color: #0d3b66;
    color: white;
  }
`;
export const StyledShoppingCartOutlined = styled(ShoppingCartOutlined)`
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: #dee2e6;
`;
export const StyledGoToCheckout = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 13px;
  background-color: #0d3b66;
  color: white;
  &:hover {
    background-color: #0d3b66;
    color: white;
  }
  &:focus {
    background-color: #0d3b66;
    color: white;
  }
`;
