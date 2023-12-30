import styled from "styled-components";
import { Typography, Card, Button, Modal, Space } from "antd";
const Text = Typography;
const Title = Typography;

export const StyledSpace = styled(Space)`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  align-items: end;
`;

export const StyledCard = styled(Card)`
  border-radius: 10px;
  width: 350px;
`;
export const StyledSpace2 = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const StyledOrdersCard = styled(Card)`
  width: 80%;
  margin-left: 17%;
  margin-right: 5%;
  margin-top: 20px;
  border-radius: 10px;
`;
