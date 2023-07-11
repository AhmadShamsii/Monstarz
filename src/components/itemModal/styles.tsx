import styled from "styled-components";
import {  Avatar, Space, Typography, Button } from "antd";
import { HeartFilled } from "@ant-design/icons";
const { Text } = Typography;

export const StyledAvatar = styled(Avatar)`
  background-color: #dee2e6;
  border-radius: 10px;
`;
export const StyledSpace = styled(Space)`
  width: 100%;
  margin-left: 30px;
  font-weight: bold;
`;
export const StyledName = styled(Text)`
  font-size: 30px;
  color: #023047;
  margin-bottom: 20px;
  font-family: "Aoboshi One", serif;
`;
export const StyledEmail = styled(Text)`
  font-size: 16px;
  color: #1890ff;
  font-weight: 400;
`;
export const StyledPhone = styled(Text)`
  font-size: 16px;
  color: red;
  font-weight: 400;
`;
export const StyledModalHeart = styled(HeartFilled)`
  font-size: 40px;
  position: relative;
  bottom: -23px;
  right: 0px;
  fill: black;
`;
export const StyledModalAddCart = styled(Button)`
  background-color: #0d3b66;
  color: #f6f2f8;
  width: 160px;
  font-size: 20px;
  height: 42px;
  border-radius: 10px;
  position: relative;
  bottom: -24px;
  left: 52%;
  transform: translateX(-50%);
`;
