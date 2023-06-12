import { useSelector, useDispatch } from "react-redux";
import { usersSelector } from "../../app/users/selector";
import { incrementQuantity, decrementQuantity } from "../../app/users/slice";
import { useRef, useEffect } from "react";
import Foooter from "../../components/footer/footer";
import {
  Card,
  PageHeader,
  Typography,
  Button,
  Divider,
  Avatar,
  message,
  Space,
} from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
const { Text, Title } = Typography;

const Checkout = () => {
  const { cart } = useSelector(usersSelector);
  const dispatch = useDispatch();
  const { category } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const DelayedLink = ({ delay, to, children, ...props }) => {
    const timerRef = useRef<NodeJS.Timeout | undefined>();

    useEffect(() => {
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, []);

    const clickHandler = () => {
      timerRef.current = setTimeout(() => {
        window.location.href = to;
      }, delay);
    };
    const openMessage = () => {
      console.log("openmessage");
      messageApi.open({
        key,
        type: "loading",
        content: "Loading... Please wait",
        style: {
          fontSize: "18px",
        },
      });
      setTimeout(() => {
        messageApi.open({
          key,
          type: "success",
          content: "Payment done! Thank you for shopping with us.",
          duration: 2,
          style: {
            fontSize: "18px",
          },
        });
        clickHandler();
      }, 1000);
    };
    return (
      <Button
        {...props}
        onClick={openMessage}
        style={{
          width: "300px",
          height: "50px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#0d3b66",
        }}
        size="large"
        type="primary"
      >
        {children}
      </Button>
    );
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <div style={{ marginTop: "110px" }}>
      <Link to={`/shop/${category}`}>
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
        style={{ marginTop: "50px", marginLeft: "10.5%" }}
        title="Checkout"
      />
      <Divider />
      <Card className="font-family-tertiary"
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
          <Text style={{ marginLeft: "220px" }}>Qantity X Price</Text>
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
      <DelayedLink delay={3000} to="/shop">
        Add Payment
      </DelayedLink>
      <Foooter margintop="150px" />
    </div>
  );
};
export default Checkout;
