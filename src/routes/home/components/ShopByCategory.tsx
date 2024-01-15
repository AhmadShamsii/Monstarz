import { Space } from "antd";
import { Link } from "react-router-dom";
import {
  StyledCategoryCard,
  StyledCategoryTitle,
  StyledDivider,
  StyledSpace,
  StyledSpace2,
} from "../styles";

const ShopByCatgory = () => {
  return (
    <>
      <StyledDivider
        orientationMargin={21}
        style={{
          fontSize: "60px",
          color: "#0d3b66",
          fontWeight: "600",
        }}
      >
        Shop By Category
      </StyledDivider>
      <StyledSpace2 style={{ margin: "0 10%" }}>
        <StyledSpace>
          <Link to="shop/monsters">
            <StyledCategoryCard
              hoverable
              cover={
                <img alt="example" src={`https://robohash.org/1?set=set2`} />
              }
            >
              <StyledCategoryTitle>Monsters</StyledCategoryTitle>
            </StyledCategoryCard>
          </Link>
          <Link to="shop/robots">
            <StyledCategoryCard
              hoverable
              cover={
                <img alt="example" src={`https://robohash.org/3?set=set1`} />
              }
            >
              <StyledCategoryTitle>Robots</StyledCategoryTitle>
            </StyledCategoryCard>
          </Link>

          <Link to="shop/avatars">
            <StyledCategoryCard
              hoverable
              cover={
                <img alt="example" src={`https://robohash.org/106?set=set5`} />
              }
            >
              <StyledCategoryTitle>Avatars</StyledCategoryTitle>
            </StyledCategoryCard>
          </Link>

          <Link to="shop/roboHeads">
            <StyledCategoryCard
              hoverable
              cover={
                <img alt="example" src={`https://robohash.org/101?set=set3`} />
              }
            >
              <StyledCategoryTitle>Robo Heads</StyledCategoryTitle>
            </StyledCategoryCard>
          </Link>
        </StyledSpace>
      </StyledSpace2>
    </>
  );
};
export default ShopByCatgory;
