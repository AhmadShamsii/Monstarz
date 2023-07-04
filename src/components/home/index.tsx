import {
  StyledCarousel,
  StyledTitle,
  StyledAvatar1,
  StyledAvatar2,
  StyledAvatar3,
  StyledButton,
  StyledText,
  StyledText2,
  StyledAvatar,
  StyledButton1,
  StyledDivider,
  StyledSpace,
  StyledCategoryCard,
  StyledCategoryTitle,
  StyledDivider2,
  StyledSpace2,
  StyledCard,
  StyledHeartFilled,
  StyledAddToCart,
  StyledCardTitle,
  StyledSeeAllArrow,
  StyledSeeAllText,
  StyledSpace3,
  StyledSiteInfo,
  StyledSiteInfoIcon1,
  StyledSiteInfoIcon2,
  StyledSiteInfoIcon3,
  StyledSiteInfoIcon4,
  StyledSiteInfoTitle,
  StyledSiteInfoText,
  StyledSiteInfoSpace,
} from "./styles";
import { Space, Divider, Row } from "antd";
import Typography from "antd/lib/typography/Typography";
import { ArrowRightOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Foooter from "../footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import { useState } from "react";
import {
  addToFavourites,
  removeFromFavourites,
  setFavColor,
  addToCart,
} from "../../app/products/slice";
import ItemModal from "../itemModal";
import { Helmet } from "react-helmet-async";

const Text = Typography;

const Home = () => {
  const dispatch = useDispatch();
  const { productsData, favourites, iconColor } = useSelector(productsSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardClicked, setCardClicked] = useState("");
  const data = productsData.slice(1, 5);
  const data2 = productsData.slice(12, 16);

  const handleFavourite = (index) => {
    const favouriteExists = favourites.includes(index);

    if (favouriteExists) {
      dispatch(removeFromFavourites({ index, favourites }));
    } else {
      dispatch(addToFavourites({ index, favourites }));
    }
  };

  const showModal = (user) => {
    setIsModalOpen(true);
    setCardClicked(user);
  };
  return (
    <>
      <Helmet>
        <title>Monstarz</title>
      </Helmet>
      <StyledCarousel dotPosition="bottom" autoplay autoplaySpeed={3000}>
        <>
          <Space>
            <StyledTitle>
              Buy Monsters, Robots, Avatars <br></br> and much more
            </StyledTitle>
            <Space style={{ display: "flex" }}>
              <StyledAvatar1 size={420} src="https://robohash.org/3?=set5}" />
              <StyledAvatar2 size={320} src="https://robohash.org/1?=set2}" />
              <StyledAvatar3
                size={222}
                shape="circle"
                src="https://robohash.org/121?=set2"
              />
            </Space>
          </Space>
          <Link to="/shop">
            <StyledButton>
              Shop Now <ArrowRightOutlined />
            </StyledButton>
          </Link>
        </>
        <>
          <StyledText>Monsters</StyledText>
          <StyledText2>
            Not just Monsters, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione non, dignissimos quia quibusdam corporis
            fugiat laboriosam repellendus sunt unde amet veniam repudiandae aut
            iure error similique dolor molestiae? Excepturi, inventore.
          </StyledText2>
          <StyledAvatar
            shape="circle"
            src={`https://robohash.org/1?set=set2`}
            size={380}
          />
          <Link to="/shop/monsters">
            <StyledButton1>
              Shop Monsters <ArrowRightOutlined />
            </StyledButton1>
          </Link>
        </>
        <>
          <StyledText>Robots</StyledText>
          <StyledText2>
            Not just Robots, Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione non, dignissimos quia quibusdam corporis fugiat
            laboriosam repellendus sunt unde amet veniam repudiandae aut iure
            error similique dolor molestiae? Excepturi, inventore.
          </StyledText2>
          <StyledAvatar
            shape="circle"
            src={`https://robohash.org/11?set=set1`}
            size={380}
          />
          <Link to="/shop/robots">
            <StyledButton1>
              Shop Robots <ArrowRightOutlined />
            </StyledButton1>
          </Link>
        </>
        <>
          <StyledText>Avatars</StyledText>
          <StyledText2>
            Not just Avatars, Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione non, dignissimos quia quibusdam corporis fugiat
            laboriosam repellendus sunt unde amet veniam repudiandae aut iure
            error similique dolor molestiae? Excepturi, inventore.
          </StyledText2>
          <StyledAvatar
            shape="circle"
            src={`https://robohash.org/38?set=set5`}
            size={380}
          />
          <Link to="/shop/avatars">
            <StyledButton1>
              Shop Avatars <ArrowRightOutlined />
            </StyledButton1>
          </Link>
        </>
      </StyledCarousel>
      <ItemModal
        item={cardClicked}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
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
      <Space style={{ margin: "0 10%" }}>
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
      </Space>
      <StyledDivider2
        orientation="left"
        style={{
          color: "#0d3b66",
          fontSize: "60px",
          fontWeight: "600",
        }}
      >
        Trending
      </StyledDivider2>
      <StyledSpace2 style={{}}>
        {data.map((user) => {
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
                      src={`https://robohash.org/${user.id}?set=set2`}
                    />
                  }
                >
                  <StyledHeartFilled
                    style={{
                      color: iconColor[index.id] || "#CDE4F9",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToFavourites({ index, data }));
                      dispatch(setFavColor({ id: index.id }));
                      handleFavourite(index);
                    }}
                  />
                  <StyledAddToCart
                    icon={<PlusCircleOutlined />}
                    style={{}}
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
        <Link to="shop/monsters">
          <StyledSeeAllArrow />
          <StyledSeeAllText>See all</StyledSeeAllText>
        </Link>
      </StyledSpace2>
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
      <Divider />
      <StyledSpace3 className="pathclip">
        <StyledSiteInfo>
          <StyledSiteInfoIcon1 />
          <StyledSiteInfoSpace>
            <StyledSiteInfoTitle>Track Your Order</StyledSiteInfoTitle>
            <StyledSiteInfoText>
              Click here for quick update and info
            </StyledSiteInfoText>
          </StyledSiteInfoSpace>
        </StyledSiteInfo>
        <StyledSiteInfo>
          <StyledSiteInfoIcon2 />
          <StyledSiteInfoSpace>
            <StyledSiteInfoTitle>Support 24/7</StyledSiteInfoTitle>
            <StyledSiteInfoText>
              Contact us 24 hours a day, 7 days a week
            </StyledSiteInfoText>
          </StyledSiteInfoSpace>
        </StyledSiteInfo>
        <StyledSiteInfo>
          <StyledSiteInfoIcon3 />
          <StyledSiteInfoSpace>
            <StyledSiteInfoTitle>100% Payment Secure</StyledSiteInfoTitle>
            <StyledSiteInfoText>
              We ensure secure payment with PEV
            </StyledSiteInfoText>
          </StyledSiteInfoSpace>
        </StyledSiteInfo>
        <StyledSiteInfo>
          <StyledSiteInfoIcon4 />
          <StyledSiteInfoSpace>
            <StyledSiteInfoTitle>Payment Methods</StyledSiteInfoTitle>
            <StyledSiteInfoText>
              COD, Credit Card: Visa, Master Card
            </StyledSiteInfoText>
          </StyledSiteInfoSpace>
        </StyledSiteInfo>
      </StyledSpace3>
      <Foooter margintop="" />
    </>
  );
};
export default Home;
