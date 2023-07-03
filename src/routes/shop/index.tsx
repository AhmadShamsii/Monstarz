import { Divider, Space } from "antd";
import { StyledArrowLeftOutlined, StyledPageHeader } from "../about/styles";
import { Link } from "react-router-dom";
import Foooter from "../../components/footer";
import { StyledSpace, StyledCard, StyledText } from "./styles";

const Shop = () => {
  return (
    <div style={{ marginTop: "110px" }}>
      <StyledPageHeader
        title={
          <>
            <Link to="/">
              <StyledArrowLeftOutlined />
            </Link>{" "}
            Categories
          </>
        }
      />
      <Divider />
      <StyledSpace>
        <Link to="monsters">
          <StyledCard
            className="font-family-primary"
            hoverable
            cover={
              <img alt="example" src={`https://robohash.org/1?set=set2`} />
            }
          >
            <StyledText>Monsters</StyledText>
          </StyledCard>
        </Link>
        <Link to="robots">
          <StyledCard
            className="font-family-primary"
            hoverable
            cover={
              <img alt="example" src={`https://robohash.org/3?set=set1`} />
            }
          >
            <StyledText>Robots</StyledText>
          </StyledCard>
        </Link>

        <Link to="avatars">
          <StyledCard
            className="font-family-primary"
            hoverable
            cover={
              <img alt="example" src={`https://robohash.org/2?set=set5`} />
            }
          >
            <StyledText>Avatars</StyledText>
          </StyledCard>
        </Link>

        <Link to="roboHeads">
          <StyledCard
            className="font-family-primary"
            hoverable
            cover={
              <img alt="example" src={`https://robohash.org/3?set=set3`} />
            }
          >
            <StyledText>Robo Heads</StyledText>
          </StyledCard>
        </Link>
      </StyledSpace>
      <Foooter margintop="150px" />
    </div>
  );
};
export default Shop;
