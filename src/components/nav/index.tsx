import { Menu, Badge, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import {
  addToFavourites,
  removeFromFavourites,
  setFavColor,
} from "../../app/products/slice";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";
import {
  removeFromCart,
  cartClearAll,
  incrementQuantity,
  decrementQuantity,
  switchUser,
} from "../../app/products/slice";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  StyledMenuItem,
  StyledCaretUpOutlined,
  StyledCaretDownOutlined,
  StyledCloseCircleOutlined,
  StyledMenuItem2,
  StyledNavHeartFilled,
  StyledHeader,
  StyledLogo,
  StyledNavItems,
  StyledDropdown1,
  StyledMenu,
  StyledDropdownTitle1,
  StyledButtonDropdown1,
  StyledUserOutlined,
  StyledDropdown2,
  StyledDropdownTitle2,
  StyledEmptyHeartFilled,
  StyledEmptyText,
  StyledHeartOutlined,
  StyledDropdown3,
  StyledCartClearAll,
  StyledShoppingCartOutlined,
  StyledGoToCheckout,
} from "./styles";

const Nav = () => {
  const { cart, favourites, iconColor, admin } = useSelector(productsSelector);

  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const { Text } = Typography;

  const customCartItems = cart.map((item) => {
    const index = item;
    const data = cart;

    console.log(index, "cart");

    return (
      <StyledMenuItem key={item.id}>
        <Text style={{ fontSize: "16px" }}>
          {item.name || `${item.first_name}  ${item.last_name}`}
        </Text>
        <Text
          style={{ marginLeft: "5px", fontWeight: "bold", fontSize: "16px" }}
        >
          ({item.quantity})
        </Text>
        <StyledCaretUpOutlined
          onClick={() => dispatch(incrementQuantity(index))}
        />
        <StyledCaretDownOutlined
          onClick={() => dispatch(decrementQuantity(index))}
        />
        <StyledCloseCircleOutlined
          onClick={() => dispatch(removeFromCart({ index, data }))}
        />
      </StyledMenuItem>
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
      <StyledMenuItem2 key={fav.id}>
        <Text>{fav.name || `${fav.first_name}  ${fav.last_name}`}</Text>
        <StyledNavHeartFilled
          size={30}
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
      </StyledMenuItem2>
    );
  });

  return (
    <StyledHeader>
      <Menu style={{ position: "relative" }} defaultSelectedKeys={["1"]}>
        <Link to="/">
          <StyledLogo>Monstarz</StyledLogo>
        </Link>
        <StyledNavItems>
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
        </StyledNavItems>
        <Space style={{ position: "absolute", right: "8.7%" }}>
          <StyledDropdown1
            trigger={["click"]}
            placement="bottom"
            overlay={
              <StyledMenu style={{ width: "200px" }}>
                <StyledDropdownTitle1 style={{ fontSize: "19px" }}>
                  Switch user
                </StyledDropdownTitle1>
                <Divider />
                {admin ? (
                  <Link to="/">
                    <StyledButtonDropdown1
                      onClick={() => {
                        dispatch(switchUser());
                      }}
                    >
                      Switch to {admin ? "User" : "Admin"}
                    </StyledButtonDropdown1>
                  </Link>
                ) : (
                  <StyledButtonDropdown1
                    onClick={() => {
                      dispatch(switchUser());
                    }}
                  >
                    Switch to {admin ? "User" : "Admin"}
                  </StyledButtonDropdown1>
                )}
              </StyledMenu>
            }
          >
            <StyledUserOutlined
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </StyledDropdown1>
          <StyledDropdown2
            placement="bottom"
            overlay={
              <StyledMenu>
                <StyledDropdownTitle2 style={{ fontSize: "19px" }}>
                  Favourites
                </StyledDropdownTitle2>
                <Divider style={{ marginBottom: "6px" }}></Divider>
                {favs.length > 0 ? (
                  customFavItems
                ) : (
                  <Menu.Item
                    style={{
                      width: "200px",
                    }}
                  >
                    <StyledEmptyHeartFilled />
                    <StyledEmptyText>No Favourites yet</StyledEmptyText>
                  </Menu.Item>
                )}
                <Divider style={{ margin: "6px 0" }}></Divider>
              </StyledMenu>
            }
            trigger={["click"]}
          >
            <Badge
              color="#1890ff"
              style={{
                position: "absolute",
                top: "-2px",
                right: "20px",
              }}
              count={favs.length > 0 ? favs.length : ""}
            >
              <StyledHeartOutlined
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </Badge>
          </StyledDropdown2>
          <StyledDropdown3
            placement="bottom"
            visible={isCartDropdownOpen}
            overlay={
              <StyledMenu onClick={() => setIsCartDropdownOpen(true)}>
                <StyledDropdownTitle2 style={{ fontSize: " 19px" }}>
                  Cart Items
                </StyledDropdownTitle2>
                {cart.length > 0 ? (
                  <StyledCartClearAll
                    onClick={() => {
                      dispatch(cartClearAll());
                    }}
                  >
                    Clear All
                  </StyledCartClearAll>
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
                    <StyledShoppingCartOutlined />
                    <StyledEmptyText>Cart is empty</StyledEmptyText>
                  </Menu.Item>
                )}
                <Divider style={{ margin: "6px 0" }}></Divider>
                {cart.length > 0 ? (
                  <Link to="checkout">
                    <StyledGoToCheckout
                      onClick={() => setIsCartDropdownOpen(false)}
                    >
                      Go to Checkout
                    </StyledGoToCheckout>
                  </Link>
                ) : (
                  ""
                )}
                <Divider></Divider>
              </StyledMenu>
            }
            trigger={cart.length > 0 ? ["click"] : ["contextMenu"]}
          >
            <Badge color="#1890ff" count={cart.length > 0 ? cart.length : ""}>
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
          </StyledDropdown3>
        </Space>
      </Menu>
    </StyledHeader>
  );
};

export default Nav;
