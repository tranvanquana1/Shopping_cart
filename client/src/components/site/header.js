import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Badge,
  CardTitle,
  CardImg,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { ProductContext } from "../context/productsContext";

import signinIcon from "./icons/sign-in.svg";
import signoutIcon from "./icons/sign-out.svg";
import userIcon from "./icons/user.svg";
import cartIcon from "./icons/shopping-cart.svg";
import bookmarkIcon from "./icons/bookmark.svg";

const Header = (props) => {
  let history = useHistory();

  const {
    products,
    setProducts,
    cart,
    setCart,
    favorite,
    setFavorite,
    user,
    setUser,
  } = useContext(ProductContext);

  const logout = () => {
    setUser(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className="header"
      style={{
        position: "fixed",
        backgroundColor: "white",
        zIndex: 1,
        width: "90%",
        margin: "auto",
      }}
    >
      <Navbar
        light
        expand="md"
        style={{
          margin: "0px auto",
          width: "100%",
          padding: "10px 10px",
          borderBottom: "1px solid black",
          borderRadius: "30px",
        }}
      >
        <Link
          className="logo"
          to="/"
          style={{
            letterSpacing: "2px",
            marginLeft: "50px",
            color: "black",
            textDecoration: "none",
          }}
        >
          <CardTitle tag="h3">
            Book<span style={{ color: "#ff4d4f" }}>shop</span>
          </CardTitle>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <ul style={{ display: "flex", listStyleType: "none" }}>
              {user && (
                <li style={{ margin: "auto 20px" }}>
                  <Link
                    to="/favorite/"
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    <CardImg
                      src={bookmarkIcon}
                      style={{ width: "23px" }}
                    ></CardImg>
                    <sup style={{ fontSize: "15px" }}>
                      <Badge pill style={{ backgroundColor: "#ff4d4f" }}>
                        {favorite.length}
                      </Badge>
                    </sup>
                  </Link>
                </li>
              )}
              {user && (
                <li style={{ margin: "auto 20px" }}>
                  <Link
                    to="/cart/"
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    <CardImg src={cartIcon} style={{ width: "27px" }}></CardImg>
                    <sup style={{ fontSize: "15px" }}>
                      <Badge pill style={{ backgroundColor: "#ff4d4f" }}>
                        {cart.length}
                      </Badge>
                    </sup>
                  </Link>
                </li>
              )}
              {!user && (
                <li style={{ margin: "auto 20px" }}>
                  <Link
                    to="/user/"
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    <CardImg
                      src={signinIcon}
                      style={{ width: "30px" }}
                    ></CardImg>
                  </Link>
                </li>
              )}
              {user != null && (
                <li style={{ margin: "auto 20px" }}>
                  <CardTitle
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      textDecoration: "none",
                      margin: "auto",
                    }}
                  >
                    <CardImg src={userIcon} style={{ width: "27px" }}></CardImg>
                    <sub style={{ marginLeft: "5px", fontSize: "15px" }}>
                      {user.name}
                    </sub>
                  </CardTitle>
                </li>
              )}
              {user != null && (
                <li style={{ margin: "auto 20px" }}>
                  <Link
                    to="/user/"
                    onClick={logout}
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    <CardImg
                      src={signoutIcon}
                      style={{ width: "30px" }}
                    ></CardImg>
                  </Link>
                </li>
              )}
            </ul>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
