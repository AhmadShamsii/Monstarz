import styled from "styled-components";
import { Typography, Card, Button, Modal, Space } from "antd";
const Text = Typography;
const Title = Typography;

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

export const StyledOrderReceiptModal = styled(Modal)`
  position: relative;
  &:before,
  &:after {
    background-repeat: repeat-x;
    content: " ";
    display: block;
    height: 32px;
    width: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
  }
  &:before {
    background: linear-gradient(
        -45deg,
        white 16px,
        white 16px,
        white 16px,
        transparent 0
      ),
      linear-gradient(45deg, white 16px, transparent 0);
    background-size: 18px 32px;
    background-position: left top;
    top: -30px;
  }
  &:after {
    background: linear-gradient(
        -135deg,
        white 16px,
        white 16px,
        white 16px,
        transparent 0
      ),
      linear-gradient(135deg, white 16px, transparent 0);
    background-position: left bottom;
    background-size: 18px 32px;
  }
`;

export const StyledReciptTitle = styled(Title)`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const StyledReciptOrderDetails = styled(Title)`
  font-size: 13px;
  font-weight: bold;
`;
export const StyledReciptOrderDesc = styled(Title)`
  font-size: 13px;
`;
export const StyledCardReceiptItem = styled(Space)`
  display: flex;
  align-items: start;
  padding: 2px;
`;
export const StyledReceiptCardItemName = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  padding-top: 20px;
`;
export const StyledReceiptCardItemTotal = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  right: 30px;
  padding-top: 20px;
`;
export const StyledReceiptSubTotal = styled(Space)`
  font-size: 15px;
`;
export const StyledReceiptSubTotalPrice = styled(Space)`
  position: absolute;
  right: 30px;
`;
export const StyledReceiptButtons = styled(Button)`
  background-color: #0d3b66;
  font-size: 14px;
  height: 30px;
  &:hover {
    background-color: #1b263b;
  }
  &:focus {
    background-color: #0d3b66;
  }
`;
