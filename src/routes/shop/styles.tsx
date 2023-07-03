import styled from "styled-components";
import { Typography, Card, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
const Text = Typography;

export const StyledSpace = styled(Space)`
  display: flex;
  justify-content: start;
  gap: 0px;
  margin-left: 10%;
  margin-right: 5%;
`;
export const StyledCard = styled(Card)`
  width: 75%;
  margin: 0;
  background-color: white;
  border-radius: 5px;
  text-align: center;
`;
export const StyledText = styled(Text)`
  font-size: 42px;
  color: black;
  font-weight: 600;
`;
