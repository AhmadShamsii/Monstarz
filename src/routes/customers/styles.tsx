import styled from "styled-components";
import { Typography, Card, PageHeader, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
const Text = Typography;

export const StyledAdminPageHeader = styled(PageHeader)`
  margin-top: 55px;
  margin-left: 240px;
  padding-left:   30px;
  margin-bottom: 24px;
  font-weight: bold;
  background-color: white;
`;
export const StyledCard = styled(Card)`
  margin-left: 270px;
  margin-right: 34px;
  border-radius: 10px;
  margin-top: 20px;
`;
export const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 10px;
`;
