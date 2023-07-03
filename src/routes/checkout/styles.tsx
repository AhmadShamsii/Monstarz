import styled from "styled-components";
import { Typography, Card, Button } from "antd";
const Text = Typography;

export const StyledCardHeader = styled(Card)`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 5px;
  font-size: 25px;

  font-weight: bold;
  font-family: "Bigelow Rules", cursive;
`;
export const StyledCardItem = styled(Card)`
  width: 80%;
  display: flex;
  margin: 20px 215px 0px 140px;
  background-color: white;
`;
export const StyledCardItemName = styled(Text)`
  font-size: 20px;
  margin-left: 285px;
  position: absolute;
  top: 30%;
`;
export const StyledCardItemQuantity = styled(Text)`
  font-size: 20px;
  position: absolute;
  right: 405px;
  top: 30px;
`;
export const StyledCardItemTotal = styled(Text)`
  position: absolute;
  right: 70px;
  font-size: 20px;
  top: 30px;
`;
export const StyledCardItemTotalPrice = styled(Text)`
  font-size: 30px;
  z-index: 10000;
  margin-left: 76%;
`;
export const StyledButtonAddPayment = styled(Button)`
  width: 300px;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #0d3b66;
  color: white;
  font-size: 20px;
  &:hover {
    background-color: #123456;
    color: #ffffff;
  }
  &:focus {
    background-color: #123456;
    color: #ffffff;
  }
`;
