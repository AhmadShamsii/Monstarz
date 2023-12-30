import { useSelector, useDispatch } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import { incrementQuantity, decrementQuantity } from "../../app/products/slice";
import { useEffect, useState } from "react";
import Foooter from "../../components/footer";
import { Helmet } from "react-helmet-async";

import {
  createOrder,
  cartClearAll,
  recordOrders,
} from "../../app/products/slice";
import {
  Typography,
  Divider,
  Avatar,
  message,
  Button,
  Space,
  Col,
  Row,
} from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { StyledPageHeader, StyledArrowLeftOutlined } from "../about/styles";
import {
  StyledReceiptSubTotalPrice,
  StyledReceiptSubTotal,
  StyledCardHeader,
  StyledCardItem,
  StyledCardItemName,
  StyledCardItemQuantity,
  StyledCardItemTotal,
  StyledCardItemTotalPrice,
  StyledButtonAddPayment,
  StyledReciptTitle,
  StyledReciptOrderDetails,
  StyledReciptOrderDesc,
  StyledCardReceiptItem,
  StyledReceiptCardItemName,
  StyledReceiptCardItemTotal,
  StyledOrderReceiptModal,
  StyledReceiptButtons,
} from "./styles";
import html2canvas from "html2canvas";
import { createGlobalStyle } from "styled-components";

const { Text } = Typography;

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, order } = useSelector(productsSelector);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState(false);
  const key = "updatable";

  useEffect(() => {
    dispatch(recordOrders(order));
  }, [order]);

  const handleOrder = () => {
    dispatch(createOrder());

    setTimeout(() => {
      setOpen(true);
    }, 2000);
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Payment Done",
        duration: 2,
      });
    }, 1000);
  };
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${months[monthIndex]} ${year}`;
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };
  const currentDate = new Date();

  const formattedDate = formatDate(currentDate);
  const formattedTime = formatTime(currentDate);

  const formattedDateTime = `${formattedDate}, ${formattedTime}`;

  const handleSaveReceipt = () => {
    const modalContent = document.getElementById("receipt-modal");

    if (modalContent) {
      html2canvas(modalContent).then((canvas) => {
        const dataUrl = canvas.toDataURL();
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "modal_screenshot.png";
        link.click();
      });
    }
  };

  return (
    <div style={{ marginTop: "110px" }}>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
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
        <Col span={6}>Character</Col>
        <Col span={6}>Name</Col>
        <Col span={6}>Quantity X Price</Col>
        <Col span={6}>Total</Col>
      </StyledCardHeader>
      {cart.map((cartItem, index) => {
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
          <StyledCardItem key={index}>
            <Col span={6}>
              <Avatar
                size={64}
                style={{ width: "100px", marginLeft: "30px" }}
                src={`https://robohash.org/${cartItem.id}?set=set${set}`}
              />{" "}
            </Col>

            <Col span={6}>
              {`${cartItem.first_name}  ${cartItem.last_name}`}
            </Col>
            <Col span={6}>
              {cartItem.quantity} x 100$
              <CaretUpOutlined
                style={{ position: "absolute", left: "200px", top: "2px" }}
                onClick={() => dispatch(incrementQuantity(cartItem))}
              />
              <CaretDownOutlined
                style={{ position: "absolute", left: "200px", top: "14px" }}
                onClick={() => dispatch(decrementQuantity(cartItem))}
              />
            </Col>
            <Col span={6}>{cartItem.quantity * 100} $</Col>
          </StyledCardItem>
        );
      })}
      <Divider />
      <StyledCardItemTotalPrice>
        Total: {calculateTotalQuantity() * 100}$
      </StyledCardItemTotalPrice>
      <Divider />
      {contextHolder}
      <StyledButtonAddPayment onClick={handleOrder}>
        Add Payment
      </StyledButtonAddPayment>

      <StyledOrderReceiptModal
        visible={open}
        closable={false}
        footer={
          <Space style={{ display: "flex", justifyContent: "center" }}>
            <StyledReceiptButtons
              onClick={() => {
                dispatch(cartClearAll());
                navigate("/");
              }}
              type="primary"
            >
              Back to Home
            </StyledReceiptButtons>
            <StyledReceiptButtons
              onClick={() => {
                dispatch(cartClearAll());
                navigate("/shop");
              }}
              type="primary"
            >
              Browse More
            </StyledReceiptButtons>
            <StyledReceiptButtons
              icon={<DownloadOutlined />}
              onClick={handleSaveReceipt}
              type="primary"
            >
              Save Receipt
            </StyledReceiptButtons>
          </Space>
        }
      >
        <div style={{ padding: "10px" }} id="receipt-modal">
          <StyledReciptTitle>Thanks for your order!</StyledReciptTitle>
          <Text>Your order has been confirmed and will be delivered soon.</Text>
          <Space style={{ display: "flex", marginTop: "20px" }}>
            <StyledReciptOrderDetails>Order Id: </StyledReciptOrderDetails>
            <StyledReciptOrderDesc>
              {(Math.random() * 10).toFixed(15).split(".")[1].substring(0, 3)}
            </StyledReciptOrderDesc>
          </Space>
          <Space style={{ display: "flex" }}>
            <StyledReciptOrderDetails>Status: </StyledReciptOrderDetails>
            <StyledReciptOrderDesc>Paid</StyledReciptOrderDesc>
          </Space>
          <Space style={{ display: "flex" }}>
            <StyledReciptOrderDetails>Date: </StyledReciptOrderDetails>
            <StyledReciptOrderDesc>{formattedDateTime}</StyledReciptOrderDesc>
          </Space>
          <Divider />
          {cart.map((cartItem, index) => {
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
              <div key={index}>
                <StyledCardReceiptItem>
                  <Avatar
                    size={64}
                    shape="square"
                    style={{ width: "75px", backgroundColor: "#edf2f4" }}
                    src={`https://robohash.org/${cartItem.id}?set=set${set}`}
                  />
                  <StyledReceiptCardItemName>
                    {`${cartItem.first_name}  ${cartItem.last_name}`}
                  </StyledReceiptCardItemName>
                  <StyledReceiptCardItemTotal>
                    $ {cartItem.quantity * 100}
                  </StyledReceiptCardItemTotal>
                </StyledCardReceiptItem>
              </div>
            );
          })}
          <Divider />
          <Space style={{ display: "flex", alignItems: "start" }}>
            <StyledReceiptSubTotal>SubTotal</StyledReceiptSubTotal>
            <StyledReceiptSubTotalPrice>
              ${calculateTotalQuantity() * 100}
            </StyledReceiptSubTotalPrice>
          </Space>
          <Space style={{ display: "flex", alignItems: "start" }}>
            <StyledReceiptSubTotal>Discount</StyledReceiptSubTotal>
            <StyledReceiptSubTotalPrice>0</StyledReceiptSubTotalPrice>
          </Space>
          <Space style={{ display: "flex", alignItems: "start" }}>
            <StyledReceiptSubTotal>Tax</StyledReceiptSubTotal>
            <StyledReceiptSubTotalPrice>0 </StyledReceiptSubTotalPrice>
          </Space>
          <Space
            style={{ display: "flex", alignItems: "start", fontWeight: "bold" }}
          >
            <StyledReceiptSubTotal>Total</StyledReceiptSubTotal>
            <StyledReceiptSubTotalPrice>
              ${calculateTotalQuantity() * 100}
            </StyledReceiptSubTotalPrice>
          </Space>
        </div>
      </StyledOrderReceiptModal>
      <Foooter margintop="150px" />
    </div>
  );
};

export default Checkout;
