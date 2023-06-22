import { useSelector, useDispatch } from "react-redux";
import { StyledPageHeader } from "../about/styles";
import { productsSelector } from "../../app/products/selector";
import { incrementQuantity, decrementQuantity } from "../../app/products/slice";
import { useRef, useEffect } from "react";
import Foooter from "../../components/footer";
import {
  createOrder,
  cartClearAll,
  recordOrders,
} from "../../app/products/slice";
import {
  Card,
  PageHeader,
  Typography,
  Button,
  Divider,
  Avatar,
  message,
} from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const { Text, Title } = Typography;

const Checkout = () => {
  const navigate = useNavigate();

  const { cart, order } = useSelector(productsSelector);
  const dispatch = useDispatch();
  const { category } = useParams();
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
      <Link to={`/shop`}>
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
      <StyledPageHeader title="Checkout" />
      <Divider />
      <Card
        className="font-family-tertiary"
        style={{
          width: "80%",
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "20px",
          backgroundColor: "white",
          borderRadius: "5px",
          fontSize: "22px",
        }}
      >
        <div>
          <Text style={{ marginLeft: "30px" }}>Character</Text>
          <Text style={{ marginLeft: "190px" }}>Name</Text>
          <Text style={{ marginLeft: "315px" }}>Qantity X Price</Text>
          <Text style={{ position: "absolute", right: "72px" }}>Total</Text>
        </div>
      </Card>
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
            <Card
              style={{
                // marginLeft: "10%",
                width: "80%",

                display: "flex",
                margin: "20px 215px 0px 140px",
                backgroundColor: "white",
              }}
            >
              <Avatar
                size={64}
                style={{ width: "100px", marginLeft: "30px" }}
                src={`https://robohash.org/${cartItem.id}?set=set${set}`}
              />
              <Text
                style={{
                  fontSize: "20px",
                  marginLeft: "145px",
                  position: "absolute",
                  top: "30%",
                }}
              >
                {cartItem.name ||
                  `${cartItem.first_name}  ${cartItem.last_name}`}
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  position: "absolute",
                  right: "410px",
                  marginTop: "7px",
                }}
              >
                {cartItem.quantity} x 100$
                <CaretUpOutlined
                  style={{ position: "absolute", right: "-35px", top: "2px" }}
                  onClick={() => dispatch(incrementQuantity(index))}
                />
                <CaretDownOutlined
                  style={{ position: "absolute", right: "-35px", top: "14px" }}
                  onClick={() => dispatch(decrementQuantity(index))}
                />
              </Text>
              <Text
                style={{
                  position: "absolute",
                  right: "70px",
                  fontSize: "20px",
                  marginTop: "7px",
                }}
              >
                {cartItem.quantity * 100} $
              </Text>
            </Card>
          </>
        );
      })}
      <Divider></Divider>
      <Title
        style={{
          fontSize: "30px",
          zIndex: "10000",
          marginLeft: "76%",
        }}
      >
        Total: {calculateTotalQuantity() * 100}$
      </Title>
      <Divider></Divider>
      {contextHolder}
      <Button
        style={{
          width: "300px",
          height: "50px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#0d3b66",
          color: "white",
          fontSize: "20px",
        }}
        onClick={handleOrder}
      >
        Add Payment
      </Button>
      <Foooter margintop="150px" />
    </div>
  );
};
export default Checkout;
