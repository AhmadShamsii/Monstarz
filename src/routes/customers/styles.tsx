import styled from "styled-components";
import { Typography, Card, PageHeader, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
const Text = Typography;

export const StyledAdminPageHeader = styled(PageHeader)`
  margin-top: 55px;
  margin-left: 17%;
  font-weight: bold;
  background-color: white;
`;
export const StyledCard = styled(Card)`
  width: 80%;
  margin-left: 18.5%;
  border-radius: 10px;
  margin-top: 20px;
`;
export const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 10px;
`;
