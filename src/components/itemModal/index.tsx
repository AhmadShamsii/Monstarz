import { Modal, Avatar, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  PlusCircleOutlined,
  MailTwoTone,
  PhoneTwoTone,
  HeartFilled,
} from "@ant-design/icons";
import { productsSelector } from "../../app/products/selector";
import {
  addToCart,
  addToFavourites,
  removeFromFavourites,
  setFavColor,
} from "../../app/products/slice";

import {
  StyledAvatar,
  StyledName,
  StyledEmail,
  StyledPhone,
  StyledModalHeart,
  StyledModalAddCart,
} from "./styles";

const Text = Typography;
const ItemModal = ({ item, isModalOpen, setIsModalOpen }) => {
  const { productsData, iconColor, favourites } = useSelector(productsSelector);

  const handleFavourite = (index) => {
    const favouriteExists = favourites.includes(index);

    if (favouriteExists) {
      dispatch(removeFromFavourites({ index, favourites }));
    } else {
      dispatch(addToFavourites({ index, favourites }));
    }
  };
  const dispatch = useDispatch();
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let set;
  let data;

  if (item.id <= 10) {
    set = 2;
    data = productsData;
  } else if (item.id > 10 && item.id <= 25) {
    set = 1;
    data = productsData.slice(0, 15);
  } else if (item.id > 25 && item.id <= 32) {
    set = 5;
    data = productsData.slice(15, 22);
  } else if (item.id > 32 && item.id <= 40) {
    set = 3;
    data = productsData.slice(22, 30);
  }
  const index = item;

  return (
    <Modal
      width="50%"
      style={{ borderRadius: "10px" }}
      footer={null}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      <div style={{ display: "flex" }}>
        <StyledAvatar
          style={{ width: "100%" }}
          shape="square"
          size={350}
          src={`https://robohash.org/${item.id}?set=set${set}`}
        />
        <div
          style={{
            width: "100%",
            marginLeft: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StyledName strong>
            {item.name || `${item.first_name}  ${item.last_name}`}
          </StyledName>
          <StyledEmail>
            <MailTwoTone style={{ marginRight: "5px" }} /> {item.email}
          </StyledEmail>
          <StyledPhone>
            <PhoneTwoTone style={{ marginRight: "7px" }} twoToneColor="red" />
            {item.phone}
          </StyledPhone>
          <Text style={{ marginTop: "15px", fontSize: "34px" }}>
            <Space style={{ color: "#38b000", fontWeight: "bold" }}>$</Space>
            <Space style={{ fontWeight: "400" }}>100</Space>
          </Text>
          <Space style={{ display: "flex" }}>
            <StyledModalHeart
              style={{
                color: iconColor[item.id] || "#CDE4F9",
              }}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToFavourites({ index, data }));
                dispatch(setFavColor({ id: item.id }));
                handleFavourite(item);
              }}
            />
            <StyledModalAddCart
              icon={<PlusCircleOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(item));
              }}
            >
              Add to Cart
            </StyledModalAddCart>
          </Space>
        </div>
      </div>
    </Modal>
  );
};

export default ItemModal;
