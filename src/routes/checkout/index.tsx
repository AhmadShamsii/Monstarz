import { useSelector, useDispatch } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import { incrementQuantity, decrementQuantity } from "../../app/products/slice";
import { useEffect } from "react";
import Foooter from "../../components/footer";
import {
  createOrder,
  cartClearAll,
  recordOrders,
} from "../../app/products/slice";
import { Typography, Divider, Avatar, message } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { StyledPageHeader, StyledArrowLeftOutlined } from "../about/styles";
import {
  StyledCardHeader,
  StyledCardItem,
  StyledCardItemName,
  StyledCardItemQuantity,
  StyledCardItemTotal,
  StyledCardItemTotalPrice,
  StyledButtonAddPayment,
} from "./styles";
const { Text } = Typography;

const Checkout = () => {
  const navigate = useNavigate();

  const { cart, order } = useSelector(productsSelector);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  useEffect(() => {
    dispatch(recordOrders(order));
  }, [order]);

  const handleOrder = () => {
    dispatch(createOrder());
    dispatch(cartClearAll());

    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 2,
      });
    }, 1000);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <div style={{ marginTop: "110px" }}>
      <StyledPageHeader
        title={
          <>
            <Link to="/shop">
              <StyledArrowLeftOutlined />
            </Link>
            Checkout
          </>
        }
      />
      <Divider />
      <StyledCardHeader>
        <>
          <Text style={{ marginLeft: "35px" }}>Character</Text>
          <Text style={{ marginLeft: "190px" }}>Name</Text>
          <Text style={{ marginLeft: "300px" }}>Qantity X Price</Text>
          <Text style={{ position: "absolute", right: "82px" }}>Total</Text>
        </>
      </StyledCardHeader>
      {cart.map((cartItem) => {
        const index = cartItem;
        let set;
        if (cartItem.id <= 10) {
          set = 2;
        } else if (cartItem.id > 10 && cartItem.id <= 25) {
          set = 1;
        } else if (cartItem.id > 25 && cartItem.id <= 32) {
          set = 5;
        } else if (cartItem.id > 32 && cartItem.id <= 40) {
          set = 3;
        }
        return (
          <>
            <StyledCardItem>
              <Avatar
                size={64}
                style={{ width: "100px", marginLeft: "30px" }}
                src={`https://robohash.org/${cartItem.id}?set=set${set}`}
              />
              <StyledCardItemName>
                {cartItem.name ||
                  `${cartItem.first_name}  ${cartItem.last_name}`}
              </StyledCardItemName>
              <StyledCardItemQuantity>
                {cartItem.quantity} x 100$
                <CaretUpOutlined
                  style={{ position: "absolute", right: "-35px", top: "2px" }}
                  onClick={() => dispatch(incrementQuantity(index))}
                />
                <CaretDownOutlined
                  style={{ position: "absolute", right: "-35px", top: "14px" }}
                  onClick={() => dispatch(decrementQuantity(index))}
                />
              </StyledCardItemQuantity>
              <StyledCardItemTotal>
                {cartItem.quantity * 100} $
              </StyledCardItemTotal>
            </StyledCardItem>
          </>
        );
      })}
      <Divider></Divider>
      <StyledCardItemTotalPrice>
        Total: {calculateTotalQuantity() * 100}$
      </StyledCardItemTotalPrice>
      <Divider></Divider>
      {contextHolder}
      <StyledButtonAddPayment onClick={handleOrder}>
        Add Payment
      </StyledButtonAddPayment>
      <Foooter margintop="150px" />
    </div>
  );
};
export default Checkout;
