import styled from "styled-components";
import { Typography, PageHeader, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
const Text = Typography;

export const StyledArrowLeftOutlined = styled(ArrowLeftOutlined)`
  font-size: 16px;
  position: absolute;
  top: 149px;
  left: 10%;
  color: black;
`;
export const StyledPageHeader = styled(PageHeader)`
  margin-top: 113px;
  margin-left: 10.5%;
  font-family: "Henny Penny", cursive;
  font-weight: 100;
`;
export const StyledText1 = styled(Text)`
  width: 50%;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const StyledText2 = styled(Text)`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%);
  font-weight: bold;
`;
