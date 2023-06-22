import {
  Card,
  PageHeader,
  Row,
  Divider,
  Button,
  Modal,
  Typography,
} from "antd";
import {
  HeartFilled,
  PlusCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { StyledPageHeader } from "../about/styles";
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
import ItemModal from "../../components/itemModal";
import Foooter from "../../components/footer";
const Text = Typography;
const Monsters = () => {
  const dispatch = useDispatch();
  const { monsters, favourites, iconColor } = useSelector(productsSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardClicked, setCardClicked] = useState("");
  const data = monsters;
  console.log(data);
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
      <StyledPageHeader title="Monsters" />

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
                  <Text>{user.phone.slice(0, 1)}</Text>
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
export default Monsters;
