import { Layout, Menu, Badge, Space } from "antd";
import { HeartFilled, HeartOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import {
  addToFavourites,
  removeFromFavourites,
  setFavColor,
} from "../../app/products/slice";

import {
  ShoppingCartOutlined,
  CloseCircleOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Divider, Dropdown, Button, Typography } from "antd";
import {
  removeFromCart,
  cartClearAll,
  incrementQuantity,
  decrementQuantity,
  switchUser,
} from "../../app/products/slice";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Nav = () => {
  const { cart, favourites, iconColor, admin } = useSelector(productsSelector);

  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const { Title, Text } = Typography;

  const customCartItems = cart.map((item) => {
    const index = item;
    const data = cart;

    return (
      <Menu.Item
        style={{
          width: "230px",
          fontSize: "15px",
          margin: "10px 0",
          color: "#0d3b66",
        }}
        key={item.id}
      >
        <Text style={{ fontSize: "16px" }}>
          {item.name || `${item.first_name}  ${item.last_name}`}
        </Text>
        <Text
          style={{ fontWeight: "bold", marginLeft: "5px", fontSize: "16px" }}
        >
          ({item.quantity})
        </Text>
        <CaretUpOutlined
          style={{ position: "absolute", right: "35px", top: "4px" }}
          onClick={() => dispatch(incrementQuantity(index))}
        />
        <CaretDownOutlined
          style={{ position: "absolute", right: "35px", top: "15px" }}
          onClick={() => dispatch(decrementQuantity(index))}
        />
        <CloseCircleOutlined
          onClick={() => dispatch(removeFromCart({ index, data }))}
          style={{ position: "absolute", right: "10px", top: "9px" }}
        />
      </Menu.Item>
    );
  });

  const handleFavourite = (index) => {
    const favouriteExists = favourites.includes(index);

    if (favouriteExists) {
      dispatch(removeFromFavourites({ index, favourites }));
    } else {
      dispatch(addToFavourites({ index, favourites }));
    }
  };

  const favs = favourites.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  const customFavItems = favs.map((fav) => {
    const index = fav;
    const data = favs;
    return (
      <Menu.Item style={{ width: "200px", fontSize: "15px" }} key={fav.id}>
        <Text>{fav.name || `${fav.first_name}  ${fav.last_name}`}</Text>
        <HeartFilled
          style={{
            color: iconColor[index.id] || "#CDE4F9",
            position: "absolute",
            right: "10px",
            top: "9px",
          }}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToFavourites({ index, data }));
            dispatch(setFavColor({ id: index.id }));
            handleFavourite(index);
          }}
        />
      </Menu.Item>
    );
  });

  return (
    <Header
      style={{
        padding: "0px",
        position: "fixed",
        zIndex: "110",
        width: "100%",
        backgroundColor: "#0d3b66",
        margin: "0px",
      }}
    >
      <div className="logo" />
      <Menu
        style={{ position: "relative" }}
        className="header-items"
        defaultSelectedKeys={["1"]}
      >
        <div>
          <Link to="/">
            <span
              className="font-family-primary"
              style={{
                fontSize: "30px",
                position: "absolute",
                left: "10%",
                color: "#f8f9fa",
              }}
            >
              Monstarz
            </span>
          </Link>
        </div>
        <div
          className="font-family-tertiary"
          style={{
            display: "flex",
            fontSize: "25px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            paddingTop: "10px",
          }}
        >
          <Menu.Item key="home">
            <Link style={{ color: "#f8f9fa" }} to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="shop">
            <Link style={{ color: "#f8f9fa" }} to="/shop">
              Shop
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link style={{ color: "#f8f9fa" }} to="/about">
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link style={{ color: "#f8f9fa" }} to="/contact">
              Contact
            </Link>
          </Menu.Item>
          {admin ? (
            <Menu.Item key="analytics">
              <Link style={{ color: "#f8f9fa" }} to="/analytics">
                Analytics
              </Link>
            </Menu.Item>
          ) : (
            ""
          )}
        </div>
        <div>
          <div style={{ position: "absolute", right: "10%" }}>
            {/* 
            
            
            
            
            */}
            <Dropdown
              trigger={["click"]}
              placement="bottom"
              className="dropdown1"
              overlay={
                <Menu
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#f8f9fa",
                    width: "200px",
                  }}
                >
                  <Title
                    level={2}
                    className="font-family-secondary"
                    style={{
                      fontSize: "18px",
                      paddingLeft: "12px",
                      paddingTop: "10px",
                    }}
                  >
                    Switch user
                  </Title>
                  <Divider />
                  {admin ? (
                    <Link to="/">
                      <Button
                        style={{
                          position: "relative",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                          backgroundColor: "#0d3b66",
                          color: "white",
                        }}
                        onClick={() => {
                          dispatch(switchUser());
                        }}
                      >
                        Switch to {admin ? "User" : "Admin"}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      style={{
                        position: "relative",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        backgroundColor: "#0d3b66",
                        color: "white",
                      }}
                      onClick={() => {
                        dispatch(switchUser());
                      }}
                    >
                      Switch to {admin ? "User" : "Admin"}
                    </Button>
                  )}
                </Menu>
              }
            >
              <UserOutlined
                style={{
                  fontSize: "24px",
                  color: "#f8f9fa",
                  marginRight: "22px",
                  position: "relative",
                  right: "100%",
                }}
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </Dropdown>

            {/* 



*/}
            <Dropdown
              className="dropdown2"
              placement="bottom"
              overlay={
                <Menu
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <Title
                    level={2}
                    className="font-family-secondary"
                    style={{
                      fontSize: "18px",
                      paddingLeft: "12px",
                      paddingTop: "10px",
                    }}
                  >
                    Favourites
                  </Title>
                  <Divider style={{ marginBottom: "6px" }}></Divider>
                  {favs.length > 0 ? (
                    customFavItems
                  ) : (
                    <Menu.Item
                      style={{
                        width: "200px",
                      }}
                    >
                      <HeartFilled
                        style={{
                          fontSize: "40px",
                          display: "flex",
                          justifyContent: "center",
                          color: "#dee2e6",
                        }}
                      />
                      <br />
                      <Text
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          color: "gray",
                        }}
                      >
                        No Favourites yet
                      </Text>
                    </Menu.Item>
                  )}
                  <Divider style={{ margin: "6px 0" }}></Divider>
                </Menu>
              }
              trigger={["click"]}
            >
              <Badge
                style={{
                  backgroundColor: "#1890ff",
                  position: "absolute",
                  top: "-2px",
                  right: "20px",
                }}
                count={favs.length > 0 ? favs.length : ""}
              >
                <HeartOutlined
                  style={{
                    fontSize: "24px",
                    color: "#f8f9fa",
                    marginRight: "20px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </Badge>
            </Dropdown>

            {/* ///////////////////
          



          
          
          */}
            <Dropdown
              className="dropdown3"
              placement="bottom"
              visible={isCartDropdownOpen}
              overlay={
                <Menu
                  onClick={() => setIsCartDropdownOpen(true)}
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <Title
                    className="font-family-secondary"
                    level={2}
                    style={{
                      fontSize: "18px",
                      paddingLeft: "12px",
                      paddingTop: "10px",
                    }}
                  >
                    Cart Items
                  </Title>
                  {cart.length > 0 ? (
                    <Button
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "8px",
                        fontSize: "12px",
                        padding: "0px 5px",
                        backgroundColor: "#0d3b66",
                        color: "white",
                      }}
                      onClick={() => {
                        dispatch(cartClearAll());
                      }}
                    >
                      Clear All
                    </Button>
                  ) : (
                    ""
                  )}

                  <Divider style={{ marginBottom: "6px" }}></Divider>
                  {cart.length > 0 ? (
                    customCartItems
                  ) : (
                    <Menu.Item
                      style={{
                        width: "200px",
                      }}
                    >
                      <ShoppingCartOutlined
                        style={{
                          fontSize: "40px",
                          display: "flex",
                          justifyContent: "center",
                          color: "#dee2e6",
                        }}
                      />
                      <br />
                      <Text
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          color: "#6c757d",
                        }}
                      >
                        Cart is empty
                      </Text>
                    </Menu.Item>
                  )}
                  <Divider style={{ margin: "6px 0" }}></Divider>
                  {cart.length > 0 ? (
                    <Link to="checkout">
                      <Button
                        style={{
                          position: "absolute",
                          left: "50%",
                          transform: "translate(-50%,0)",
                          fontSize: "13px",
                          backgroundColor: "#0d3b66",
                          color: "white",
                        }}
                        onClick={() => setIsCartDropdownOpen(false)}
                      >
                        Go to Checkout
                      </Button>
                    </Link>
                  ) : (
                    ""
                  )}
                  <Divider></Divider>
                </Menu>
              }
              trigger={cart.length > 0 ? ["click"] : ["contextMenu"]}
            >
              <Badge
                style={{
                  backgroundColor: "#1890ff",
                }}
                count={cart.length > 0 ? cart.length : ""}
              >
                <ShoppingCartOutlined
                  style={{
                    fontSize: "27px",
                    color: "#f8f9fa",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsCartDropdownOpen(!isCartDropdownOpen);
                  }}
                />
              </Badge>
            </Dropdown>
          </div>
        </div>
      </Menu>
    </Header>
  );
};

export default Nav;
