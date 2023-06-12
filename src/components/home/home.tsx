// 3d2645
import { Avatar, Button, Space, Carousel, Divider, Card, Row } from "antd";
import Typography from "antd/lib/typography/Typography";
import {
  ArrowRightOutlined,
  HeartFilled,
  PlusCircleOutlined,
  AimOutlined,
  PhoneOutlined,
  SafetyOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import Foooter from "../footer/footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../app/users/selector";
import { useState } from "react";
import {
  addToFavourites,
  removeFromFavourites,
  setFavColor,
  addToCart,
} from "../../app/users/slice";
import ItemModal from "../../components/itemModal/itemModal";

const Title = Typography;
const Text = Typography;

const Home = () => {
  const dispatch = useDispatch();
  const { usersData, favourites, iconColor } = useSelector(usersSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardClicked, setCardClicked] = useState("");
  const data = usersData.slice(1, 5);
  const data2 = usersData.slice(12, 16);

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
    <div>
      <Carousel
        className="slider"
        dotPosition="bottom"
        style={{
          width: "100%",
          paddingTop: "50px",
          // height: "120vh",
        }}
        autoplay
        autoplaySpeed={3000}
      >
        <div style={{ height: "100vh", width: "100vw" }}>
          <Space
            style={{
              display: "flex",
              margin: "0 50px",
            }}
          >
            <Title
              className="font-family-primary"
              style={{
                color: "#F6F2F8",
                fontSize: "90px",
                width: "200%",
                marginTop: "17vh",
                marginLeft: "26%",
              }}
            >
              Buy Monsters, Robots, Avatars <br></br> and much more
            </Title>
            <div style={{ display: "flex" }}>
              <Avatar
                size={420}
                style={{
                  position: "relative",
                  top: "0px",
                  right: "-320px",
                }}
                src="https://robohash.org/3?=set5}"
              />
              <Avatar
                size={320}
                style={{
                  position: "relative",
                  top: "-10px",
                  left: "100px",
                }}
                src="https://robohash.org/1?=set2}"
              />
              <Avatar
                size={222}
                shape="circle"
                style={{
                  position: "relative",
                  top: "-10px",
                  left: "-40px",
                }}
                src="https://robohash.org/121?=set2"
              />
            </div>
          </Space>
          <Link to="/shop">
            <Button
              style={{
                fontSize: "18px",
                width: "135px",
                height: "auto",
                marginLeft: "10%",
                color: "#F6F2F8",

                backgroundColor: "#0d3b66",
              }}
            >
              Shop Now <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
        <div>
          <h1
            className="font-family-primary"
            style={{
              marginLeft: "10%",
              marginTop: "17vh",
              fontSize: "90px",
              color: "#F6F2F8",
            }}
          >
            Monsters
          </h1>
          <p
            style={{
              marginLeft: "10%",
              width: "50%",
              fontSize: "19px",
              color: "#F6F2F8",
            }}
          >
            Not just Monsters, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione non, dignissimos quia quibusdam corporis
            fugiat laboriosam repellendus sunt unde amet veniam repudiandae aut
            iure error similique dolor molestiae? Excepturi, inventore.
          </p>
          <Avatar
            style={{
              backgroundColor: "#0d3b66",
              position: "relative",
              left: "63%",
              top: "-350px",
            }}
            shape="circle"
            src={`https://robohash.org/1?set=set2`}
            size={380}
          />
          <Link to="/shop/monsters">
            <Button
              style={{
                fontSize: "18px",
                width: "170px",
                height: "auto",
                position: "absolute",
                marginLeft: "-240px",
                backgroundColor: "#0d3b66",
                color: "#F6F2F8",
              }}
            >
              Shop Monsters <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
        <div>
          <h1
            className="font-family-primary"
            style={{
              marginLeft: "10%",
              marginTop: "17vh",
              fontSize: "90px",
              color: "#F6F2F8",
            }}
          >
            Robots
          </h1>
          <p
            style={{
              marginLeft: "10%",
              width: "50%",
              fontSize: "19px",
              color: "#F6F2F8",
            }}
          >
            Not just Robots, Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione non, dignissimos quia quibusdam corporis fugiat
            laboriosam repellendus sunt unde amet veniam repudiandae aut iure
            error similique dolor molestiae? Excepturi, inventore.
          </p>
          <Avatar
            style={{
              backgroundColor: "#0d3b66",
              position: "relative",
              left: "63%",
              top: "-350px",
            }}
            shape="circle"
            src={`https://robohash.org/11?set=set1`}
            size={380}
          />
          <Link to="/shop/robots">
            <Button
              style={{
                fontSize: "18px",
                width: "170px",
                height: "auto",
                position: "absolute",
                marginLeft: "-240px",
                color: "#F6F2F8",

                backgroundColor: "#0d3b66",
              }}
            >
              Shop Robots <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
        <div>
          <h1
            className="font-family-primary"
            style={{
              marginLeft: "10%",
              marginTop: "17vh",
              fontSize: "90px",
              color: "#F6F2F8",
            }}
          >
            Avatars
          </h1>
          <p
            style={{
              marginLeft: "10%",
              width: "50%",
              fontSize: "19px",
              color: "#F6F2F8",
            }}
          >
            Not just Avatars, Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione non, dignissimos quia quibusdam corporis fugiat
            laboriosam repellendus sunt unde amet veniam repudiandae aut iure
            error similique dolor molestiae? Excepturi, inventore.
          </p>
          <Avatar
            style={{
              backgroundColor: "#0d3b66",
              position: "relative",
              left: "63%",
              top: "-350px",
            }}
            shape="circle"
            src={`https://robohash.org/38?set=set5`}
            size={380}
          />
          <Link to="/shop/avatars">
            <Button
              style={{
                fontSize: "18px",
                width: "170px",
                height: "auto",
                position: "absolute",
                marginLeft: "-240px",
                backgroundColor: "#0d3b66",
                color: "#F6F2F8",
              }}
            >
              Shop Avatars <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </Carousel>
      <ItemModal
        item={cardClicked}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Divider
        orientationMargin={21}
        className="font-family-primary"
        style={{ fontSize: "60px", color: "#0d3b66", fontWeight: "600" }}
      >
        Shop By Category
      </Divider>
      <div style={{ margin: "0 10%" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "30px",
            gap: "30px",
          }}
        >
          <Link to="shop/monsters">
            <Card
              className="font-family-primary"
              hoverable
              style={{
                width: "99%",
                margin: "0",
                borderRadius: "5px",
                textAlign: "center",

                backgroundColor: "white",
              }}
              cover={
                <img alt="example" src={`https://robohash.org/1?set=set2`} />
              }
            >
              <Text
                style={{
                  fontSize: "42px",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Monsters
              </Text>
            </Card>
          </Link>
          <Link to="shop/robots">
            <Card
              className="font-family-primary"
              hoverable
              style={{
                width: "99%",

                backgroundColor: "white",
                margin: "0",
                borderRadius: "5px",
                textAlign: "center",
              }}
              cover={
                <img alt="example" src={`https://robohash.org/3?set=set1`} />
              }
            >
              <Text
                style={{
                  color: "black",
                  fontSize: "42px",
                  fontWeight: "600",
                }}
              >
                Robots
              </Text>
            </Card>
          </Link>

          <Link to="shop/avatars">
            <Card
              className="font-family-primary"
              hoverable
              style={{
                width: "99%",
                margin: "0",

                backgroundColor: "white",
                borderRadius: "5px",
                textAlign: "center",
              }}
              cover={
                <img alt="example" src={`https://robohash.org/106?set=set5`} />
              }
            >
              <Text
                style={{
                  fontSize: "42px",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Avatars
              </Text>
            </Card>{" "}
          </Link>

          <Link to="shop/roboHeads">
            <Card
              className="font-family-primary"
              hoverable
              style={{
                width: "99%",
                margin: "0",

                backgroundColor: "white",
                borderRadius: "5px",
                textAlign: "center",
              }}
              cover={
                <img alt="example" src={`https://robohash.org/101?set=set3`} />
              }
            >
              <Text
                style={{
                  fontSize: "42px",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Robo Heads
              </Text>
            </Card>
          </Link>
        </div>
      </div>
      <Divider
        orientation="left"
        className="font-family-primary"
        style={{
          color: "#0d3b66",
          fontSize: "60px",
          paddingLeft: "1.75%",
          paddingTop: "5%",
          fontWeight: "600",
        }}
      >
        Trending
      </Divider>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginLeft: "11%",
        }}
      >
        {data.map((user) => {
          const index = user;
          return (
            <div>
              <Row gutter={50}>
                <Card
                  onClick={() => {
                    showModal(user);
                  }}
                  key={user.id}
                  hoverable
                  style={{
                    backgroundColor: "white",
                    width: "75%",
                    marginLeft: "10px",
                    marginBottom: "20px",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontSize: "16px",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={`https://robohash.org/${user.id}?set=set2`}
                    />
                  }
                >
                  <HeartFilled
                    style={{
                      color: iconColor[index.id] || "#CDE4F9",
                      fontSize: "20px",
                      position: "absolute",
                      top: "5%",
                      right: "10%",
                      fill: "black",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToFavourites({ index, data }));
                      dispatch(setFavColor({ id: index.id }));
                      handleFavourite(index);
                    }}
                  />
                  <Button
                    className="add-icon"
                    icon={<PlusCircleOutlined />}
                    style={{
                      backgroundColor: "#0d3b66",
                      color: "#F6F2F8",

                      borderRadius: "10px",
                      position: "absolute",
                      bottom: "5%",
                      right: "22%",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToCart(user));
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      paddingBottom: "10px",
                      fontSize: "17px",
                    }}
                  >
                    {`${user.first_name}  ${user.last_name}`}
                  </Text>
                  <Text>{user.gender}</Text>
                </Card>
              </Row>
            </div>
          );
        })}
        <Link to="shop/monsters">
          <ArrowRightOutlined
            style={{
              fontSize: "30px",
              borderRadius: "50%",
              height: "50px",
              padding: "10px",
              backgroundColor: "white",
              border: "2px solid #F6F2F8",
              position: "relative",
              top: "90px",
              color: "#0d3b66",
            }}
          />
          <p
            style={{
              color: "#145999",
              position: "relative",
              top: "90px",
              right: "-5px",
            }}
          >
            See all
          </p>
        </Link>
      </div>
      <Divider
        orientation="left"
        className="font-family-primary"
        style={{
          fontSize: "60px",
          color: "#0d3b66",
          paddingLeft: "1.75%",
          fontWeight: "bold",
        }}
      >
        Best Sellers
      </Divider>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginLeft: "11%",
        }}
      >
        {data2.map((user) => {
          const index = user;
          return (
            <div>
              <Row gutter={50}>
                <Card
                  onClick={() => {
                    showModal(user);
                  }}
                  key={user.id}
                  hoverable
                  style={{
                    width: "75%",
                    marginLeft: "10px",
                    marginBottom: "20px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontSize: "16px",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={`https://robohash.org/${user.id}?set=set1`}
                    />
                  }
                >
                  <HeartFilled
                    style={{
                      color: iconColor[index.id] || "#CDE4F9",
                      fontSize: "20px",
                      position: "absolute",
                      top: "5%",
                      right: "10%",
                      fill: "black",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToFavourites({ index, data2 }));
                      dispatch(setFavColor({ id: index.id }));
                      handleFavourite(index);
                    }}
                  />
                  <Button
                    className="add-icon"
                    icon={<PlusCircleOutlined />}
                    style={{
                      backgroundColor: "#0d3b66",
                      color: "#F6F2F8",
                      borderRadius: "10px",
                      position: "absolute",
                      bottom: "5%",
                      right: "22%",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToCart(user));
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      paddingBottom: "10px",
                      fontSize: "17px",
                    }}
                  >
                    {`${user.first_name}  ${user.last_name}`}
                  </Text>
                  <Text>{user.gender}</Text>
                </Card>
              </Row>
            </div>
          );
        })}
        <Link to="shop/robots">
          <ArrowRightOutlined
            style={{
              fontSize: "30px",
              borderRadius: "50%",
              height: "50px",
              padding: "10px",
              backgroundColor: "white",
              border: "2px solid #F6F2F8",
              position: "relative",
              top: "90px",
              color: "#0d3b66",
            }}
          />
          <p
            style={{
              color: "#145999",
              position: "relative",
              top: "90px",
              right: "-5px",
            }}
          >
            See all
          </p>
        </Link>
      </div>

      <Divider />
      <Space
        className="pathclip"
        style={{
          padding: "10% 10% 5% 10%",
          width: "100%",
          backgroundColor: "#0d3b66",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "30px",
            width: "250px",
          }}
        >
          <AimOutlined
            style={{ fontSize: "30px", paddingRight: "20px", color: "#F6F2F8" }}
          />
          <div>
            <Title style={{ fontSize: "18px", color: "#F6F2F8" }}>
              Track Your Order
            </Title>
            <Text style={{ fontSize: "14px", color: "#F6F2F8" }}>
              Click here for quick update
            </Text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "30px",
            width: "250px",
          }}
        >
          <PhoneOutlined
            style={{ fontSize: "30px", paddingRight: "20px", color: "#F6F2F8" }}
          />
          <div style={{ marginTop: "20px" }}>
            <Title style={{ fontSize: "18px", color: "#F6F2F8" }}>
              Support 24/7
            </Title>
            <Text style={{ fontSize: "14px", color: "#F6F2F8" }}>
              Contact us 24 hours a day, 7 days a week
            </Text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "30px",
            width: "250px",
          }}
        >
          <SafetyOutlined
            style={{ fontSize: "30px", paddingRight: "20px", color: "#F6F2F8" }}
          />
          <div style={{ marginTop: "20px" }}>
            <Title style={{ fontSize: "18px", color: "#F6F2F8" }}>
              100% Payment Secure
            </Title>
            <Text style={{ fontSize: "14px", color: "#F6F2F8" }}>
              We ensure secure payment with PEV
            </Text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "30px",
            width: "250px",
          }}
        >
          <CreditCardOutlined
            style={{ fontSize: "30px", paddingRight: "20px", color: "#F6F2F8" }}
          />
          <div style={{ marginTop: "20px" }}>
            <Title style={{ fontSize: "18px", color: "#F6F2F8" }}>
              Payment Methods
            </Title>
            <Text style={{ fontSize: "14px", color: "#F6F2F8" }}>
              COD, Credit Card: Visa, Master Card
            </Text>
          </div>
        </div>
      </Space>
      <Foooter margintop="" />
    </div>
  );
};
export default Home;
