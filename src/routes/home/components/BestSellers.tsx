import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  addToFavourites,
  setFavColor,
  addToCart,
} from "../../../app/products/slice";
import {
  StyledDivider2,
  StyledSpace2,
  StyledCard,
  StyledHeartFilled,
  StyledAddToCart,
  StyledCardTitle,
  StyledSeeAllArrow,
  StyledSeeAllText,
} from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../../app/products/selector";
const { Text } = Typography;
const BestSellers = ({ showModal, handleFavourite }) => {
  const dispatch = useDispatch();
  const { productsData, iconColor } = useSelector(productsSelector);
  const data2 = productsData.slice(12, 16);

  return (
    <>
      <StyledDivider2
        orientation="left"
        style={{
          fontSize: "60px",
          color: "#0d3b66",
          fontWeight: "bold",
        }}
      >
        Best Sellers
      </StyledDivider2>
      <StyledSpace2>
        {data2.map((user) => {
          const index = user;
          return (
            <>
              <Row gutter={50}>
                <StyledCard
                  onClick={() => {
                    showModal(user);
                  }}
                  key={user.id}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={`https://robohash.org/${user.id}?set=set1`}
                    />
                  }
                >
                  <StyledHeartFilled
                    style={{
                      color: iconColor[index.id] || "#CDE4F9",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToFavourites({ index, data2 }));
                      dispatch(setFavColor({ id: index.id }));
                      handleFavourite(index);
                    }}
                  />
                  <StyledAddToCart
                    icon={<PlusCircleOutlined />}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToCart(user));
                    }}
                  >
                    Add to Cart
                  </StyledAddToCart>
                  <StyledCardTitle>
                    {`${user.first_name}  ${user.last_name}`}
                  </StyledCardTitle>
                  <Text>{user.gender}</Text>
                </StyledCard>
              </Row>
            </>
          );
        })}
        <Link to="shop/robots">
          <StyledSeeAllArrow />
          <StyledSeeAllText>See all</StyledSeeAllText>
        </Link>
      </StyledSpace2>
    </>
  );
};
export default BestSellers;
