import { Modal, Avatar, Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  PlusCircleOutlined,
  MailTwoTone,
  PhoneTwoTone,
  HeartFilled,
} from "@ant-design/icons";
import { usersSelector } from "../../app/users/selector";
import {
  addToCart,
  addToFavourites,
  removeFromFavourites,
  setFavColor,
} from "../../app/users/slice";
// import { nftsSelector } from "../../app/nft/selector";
const Text = Typography;
const ItemModal = ({ item, isModalOpen, setIsModalOpen }) => {
  const { usersData, iconColor, favourites } = useSelector(usersSelector);

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
    data = usersData;
  } else if (item.id > 10 && item.id <= 25) {
    set = 1;
    data = usersData.slice(0, 15);
  } else if (item.id > 25 && item.id <= 32) {
    set = 5;
    data = usersData.slice(15, 22);
  } else if (item.id > 32 && item.id <= 40) {
    set = 3;
    data = usersData.slice(22, 30);
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
        <Avatar
          style={{
            width: "100%",
            backgroundColor: "#dee2e6",
            borderRadius: "10px",
          }}
          shape="square"
          size={350}
          src={`https://robohash.org/${item.id}?set=set${set}`}
        />
        <div style={{ width: "100%", marginLeft: "30px", fontWeight: "bold" }}>
          <Text
            className="font-family-secondary"
            style={{ fontSize: "30px", color: "#023047", marginBottom: "20px" }}
          >
            {item.name || `${item.first_name}  ${item.last_name}`}
          </Text>
          <Text
            style={{ fontSize: "16px", color: "#1890ff", fontWeight: "400" }}
          >
            <MailTwoTone style={{ marginRight: "5px" }} /> {item.email}
          </Text>
          <Text style={{ fontSize: "16px", color: "red", fontWeight: "400" }}>
            <PhoneTwoTone style={{ marginRight: "7px" }} twoToneColor="red" />
            {item.phone}
          </Text>
          <Text style={{ marginTop: "15px", fontSize: "34px" }}>
            <span style={{ color: "#38b000" }}>$</span>
            <span style={{ fontWeight: "400" }}>100</span>
          </Text>
          <HeartFilled
            style={{
              color: iconColor[item.id] || "#CDE4F9",
              fontSize: "40px",
              position: "relative",
              bottom: "-30px",
              left: "1px",
              fill: "black",
            }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToFavourites({ index, data }));
              dispatch(setFavColor({ id: item.id }));
              handleFavourite(item);
            }}
          />
          <Button
            className="add-icon"
            icon={<PlusCircleOutlined />}
            style={{
              backgroundColor: "#0d3b66",
              color: "#F6F2F8",
              width: "160px",
              fontSize: "20px",
              height: "42px",
              borderRadius: "10px",
              position: "relative",
              bottom: "-24px",
              left: "32%",
              transform: "translateX(-50%)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart(item));
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ItemModal;
