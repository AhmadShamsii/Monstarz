import { Card, PageHeader, Row, Divider, Button, Typography } from "antd";
import {
  HeartOutlined,
  PlusCircleOutlined,
  ArrowLeftOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { addToCart } from "../../app/users/slice";
import { useDispatch, useSelector } from "react-redux";
// import { nftsSelector } from "../../app/nft/selector";
import { usersSelector } from "../../app/users/selector";

import {
  addToFavourites,
  removeFromFavourites,
  setFavColor,
} from "../../app/users/slice";
import ItemModal from "../../components/itemModal/itemModal";
import { useState } from "react";
import Foooter from "../../components/footer/footer";
const { Meta } = Card;
const Text = Typography;

const Robots = () => {
  const dispatch = useDispatch();
  const { usersData } = useSelector(usersSelector);
  const { favourites, iconColor } = useSelector(usersSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardClicked, setCardClicked] = useState("");
  const data = usersData.slice(10, 25);

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
    <div style={{ marginTop: "110px" }}>
      <ItemModal
        item={cardClicked}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Link to="/shop">
        <ArrowLeftOutlined
          style={{
            fontSize: "16px",
            position: "absolute",
            top: "149px",
            left: "10%",
            color: "black",
          }}
        />
      </Link>
      <PageHeader
        className="font-family-tertiary"
        title="Robots"
        style={{ marginTop: "50px", marginLeft: "10.5%" }}
      />
      <Divider />
      <div className="monsters-page">
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
                    width: "75%",
                    marginLeft: "35px",
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
      </div>
      <Foooter margintop="50px" />
    </div>
  );
};
export default Robots;
