import styled from "styled-components";
import { Card, Empty } from "antd";

export const StyledCard = styled(Card)`
  width: 780px;
  height: 500px;
  margin-top: 50px;
  border-radius: 10px;
`;
export const StyledEmpty = styled(Empty)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
