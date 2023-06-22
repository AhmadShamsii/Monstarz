import styled from "styled-components";
import { Typography, Form } from "antd";
const Text = Typography;

export const StyledText = styled(Text)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  font-family: "Henny Penny", cursive;
  font-weight: 100;
`;
export const StyledForm = styled(Form)`
  position: absolute;
  left: 45%;
  transform: translateX(-50%);
  width: 50%;
  margin-top: 70px;
`;
