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

import { StyledArrowLeftOutlined, StyledPageHeader } from "../about/styles";
import {
  StyledHeartFilled,
  StyledAddToCart,
  StyledCardTitle,
} from "../../components/home/styles";
import { StyledCard } from "./styles";

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
      <StyledPageHeader
        title={
          <>
            <Link to="/shop">
              <StyledArrowLeftOutlined />
            </Link>
            Monsters
          </>
        }
      />

      <Divider />
      <div className="monsters-page">
        {data.map((user) => {
          const index = user;
          return (
            <div>
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
                  <Text>{user.phone.slice(0, 1)}</Text>
                </StyledCard>
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
