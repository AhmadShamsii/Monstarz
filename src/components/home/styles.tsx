import styled from "styled-components";
import {
  Typography,
  Carousel,
  Avatar,
  Button,
  Divider,
  Space,
  Card,
} from "antd";
import {
  HeartFilled,
  ArrowRightOutlined,
  AimOutlined,
  PhoneOutlined,
  CreditCardOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
const Title = Typography;
const Text = Typography;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  padding-top: 50px;
  margin: auto;
  padding-bottom: 50px;
  clip-path: polygon(0 0, 100% 0, 100% 100vh, 0% 120vh);
  background: linear-gradient(
    315deg,
    #372343 3%,
    #0d3b66 38%,
    #1767b2 68%,
    #092743 98%
  );
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
`;

export const StyledTitle = styled(Title)`
  color: #f6f2f8;
  font-size: 90px;
  width: 200%;
  margin-top: 17vh;
  margin-left: 33%;
  font-family: "Bigelow Rules", cursive;
`;
export const StyledAvatar1 = styled(Avatar)`
  position: relative;
  top: 0px;
  right: -320px;
`;
export const StyledAvatar2 = styled(Avatar)`
  position: relative;
  bottom: 50px;
  left: 80px;
`;
export const StyledAvatar3 = styled(Avatar)`
  position: relative;
  bottom: 100px;
  left: -80px;
`;
export const StyledButton = styled(Button)`
  font-size: 18px;
  width: 135px;
  height: auto;
  margin-left: 10%;
  color: #f6f2f8;
  background-color: #0d3b66;

  &:hover {
    background-color: #123456;
    color: #ffffff;
  }
`;
export const StyledText = styled(Text)`
  margin-left: 10%;
  margin-top: 17vh;
  font-size: 90px;
  color: #f6f2f8;
  font-family: "Bigelow Rules", cursive;
`;
export const StyledText2 = styled(Text)`
  margin-left: 10%;
  width: 50%;
  font-size: 19px;
  color: #f6f2f8;
`;
export const StyledAvatar = styled(Avatar)`
  background-color: #0d3b66;
  position: relative;
  left: 63%;
  bottom: 280px;
`;
export const StyledButton1 = styled(Button)`
  font-size: 18px;
  width: 170px;
  height: auto;
  position: absolute;
  margin-left: -240px;
  background-color: #0d3b66;
  color: #f6f2f8;
  margin-top: 31px;

  &:hover {
    background-color: #123456;
    color: #ffffff;
  }
`;
export const StyledDivider = styled(Divider)`
  font-family: "Bigelow Rules", cursive;
`;
export const StyledSpace = styled(Space)`
  width: 100%;
  display: flex;
  margin-top: 30px;
  gap: 30px;
`;
export const StyledCategoryCard = styled(Card)`
  width: 99%;
  margin: 0;
  border-radius: 5px;
  text-align: center;
  background-color: white;
  font-family: "Bigelow Rules", cursive;
`;
export const StyledCategoryTitle = styled(Text)`
  font-size: 42px;
  color: black;
  font-weight: 600;
`;
export const StyledDivider2 = styled(Divider)`
  padding-left: 1.75%;
  padding-top: 5%;
  font-family: "Bigelow Rules", cursive;
`;
export const StyledSpace2 = styled(Space)`
  display: flex;
  justify-content: start;
  margin-left: 11%;
`;
export const StyledCard = styled(Card)`
  background-color: white;
  width: 75%;
  margin-left: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
`;
export const StyledHeartFilled = styled(HeartFilled)`
  font-size: 20px;
  position: absolute;
  top: 5%;
  right: 10%;
  fill: black;
`;
export const StyledAddToCart = styled(Button)`
  background-color: #0d3b66;
  color: #f6f2f8;
  border-radius: 10px;
  height: auto;
  position: absolute;
  bottom: 5%;
  right: 22%;
  &:hover {
    background-color: #123456;
    color: #ffffff;
  }
  &:focus {
    background-color: #123456;
    color: #ffffff;
  }
`;
export const StyledCardTitle = styled(Text)`
  color: black;
  font-weight: bold;
  padding-bottom: 10px;
  font-size: 17px;
`;
export const StyledSeeAllArrow = styled(ArrowRightOutlined)`
  font-size: 30px;
  border-radius: 50%;
  height: 50px;
  padding: 10px;
  background-color: white;
  border: 2px solid #f6f2f8;
  position: relative;
  top: -20px;
  color: #0d3b66;
  right: 15px;
`;
export const StyledSeeAllText = styled(Text)`
  color: #145999;
  position: relative;
  top: -20px;
  right: 8px;
`;
export const StyledSpace3 = styled(Space)`
  padding: 10% 10% 5% 10%;
  width: 100%;
  background-color: #0d3b66;
  clip-path: polygon(0 45%, 100% 0%, 100% 100%, 0 100%);
`;
export const StyledSiteInfo = styled(Space)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  width: 250px;
`;
export const StyledSiteInfoIcon1 = styled(AimOutlined)`
  font-size: 30px;
  padding-right: 20px;
  color: #f6f2f8;
`;
export const StyledSiteInfoIcon2 = styled(PhoneOutlined)`
  font-size: 30px;
  padding-right: 20px;
  color: #f6f2f8;
`;
export const StyledSiteInfoIcon3 = styled(SafetyOutlined)`
  font-size: 30px;
  padding-right: 20px;
  color: #f6f2f8;
`;
export const StyledSiteInfoIcon4 = styled(CreditCardOutlined)`
  font-size: 30px;
  padding-right: 20px;
  color: #f6f2f8;
`;
export const StyledSiteInfoTitle = styled(Title)`
  font-size: 18px;
  color: #f6f2f8;
`;
export const StyledSiteInfoText = styled(Text)`
  font-size: 14px;
  color: #f6f2f8;
`;
export const StyledSiteInfoSpace = styled(Space)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
