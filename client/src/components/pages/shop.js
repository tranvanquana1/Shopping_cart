import React, { useContext, useState, useEffect } from "react";
import {
  ListGroup,
  ListGroupItem,
  Form,
  CardSubtitle,
  Container,
} from "reactstrap";

import {
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { ProductContext } from "../context/productsContext";
import Axios from "axios";

const Shop = (props) => {
  const { cart, setCart, favorite, setFavorite, user, setUser } = useContext(
    ProductContext
  );

  console.log(cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function increase(id) {
    const newList = cart.map((e) => {
      if (e._id !== id) return { ...e };
      return { ...e, total: e.total + 1 };
    });
    setCart(newList);
  }

  function decrease(id) {
    const newList = cart.map((e) => {
      if (e._id !== id) return { ...e };
      return { ...e, total: e.total === 1 ? 1 : e.total - 1 };
    });
    setCart(newList);
  }

  function removeItem(id) {
    const newList = cart.filter((e) => e._id !== id);
    console.log(id);
    setCart(newList);
  }
  const sumItem = () => {
    let total = 0;

    cart.map((e) => {
      total += e.price * e.total;
    });
    return total;
  };

  console.log(sumItem());

  const buy = () => {
    const bill = sumItem();
    const product_list = cart;
    const order = {
      product_list,
      user,
      bill,
    };

    Axios.post(`http://localhost:5000/api/order`, order).then((res) => {
      setCart([]);
    });
  };

  return (
    <Container style={{ boxSizing: "border-box" }}>
      <Row
        style={{
          margin: "auto",
          paddingTop: "120px",
          width: "90%",
          minHeight: "650px",
        }}
      >
        <Col xs="12" lg="8">
          <CardTitle tag="h3">My Cart</CardTitle>
          {cart.length == 0 && (
            <CardBody style={{ paddingLeft: "0", color: "#8c8c8c" }}>
              <CardTitle tag="h4">No Item in Your Cart</CardTitle>
            </CardBody>
          )}
          {cart.length != 0 && (
            <ListGroup>
              {cart.map((Item) => (
                <ListGroupItem
                  style={{
                    display: "flex",
                    marginBottom: "20px",
                    border: "1px solid #d9d9d9",
                    borderRadius: "10px",
                  }}
                  key={Item._id}
                >
                  <CardImg
                    src={Item.imgURL}
                    style={{
                      width: "130px",
                    }}
                  ></CardImg>
                  <div style={{ width: "200px", margin: "auto" }}>
                    <CardTitle
                      tag="h6"
                      style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {Item.title}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Description: {Item.description}
                    </CardSubtitle>
                  </div>
                  <InputGroup
                    style={{
                      margin: "auto",
                      width: "60px",
                      display: "flex",
                      flexDirection: "row",
                      textAlign: "center",
                      position: "left",
                    }}
                  >
                    <CardTitle tag="h4" style={{ margin: "auto" }}>
                      {Item.total}
                    </CardTitle>
                    <InputGroupAddon
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Button
                        style={{ padding: "0", width: "20px", height: "20px" }}
                        onClick={() => increase(Item._id)}
                      >
                        +
                      </Button>
                      <Button
                        style={{ padding: "0", width: "20px", height: "20px" }}
                        onClick={() => decrease(Item._id)}
                      >
                        -
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                  <CardTitle tag="h3" style={{ margin: "auto" }}>
                    ${Item.price * Item.total}
                  </CardTitle>
                  <Button
                    onClick={() => removeItem(Item._id)}
                    color="danger"
                    style={{ height: "30px", margin: "auto" }}
                  >
                    Delete
                  </Button>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
          <br />
          <br />
        </Col>
        <Col
          xs="12"
          md="8"
          lg="4"
          style={{ height: "300px", margin: "0 auto" }}
        >
          <CardTitle tag="h3">Oder</CardTitle>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <CardBody>
              <CardTitle tag="h4">{cart.length} Items</CardTitle>
            </CardBody>
            <br />
            <CardBody
              style={{ display: "flex", padding: "0", marginBottom: "10px" }}
            >
              <CardTitle tag="h4" style={{ margin: "auto 0", padding: "0" }}>
                Subtotal:
              </CardTitle>

              <CardTitle tag="h4" style={{ margin: "auto", marginRight: "0" }}>
                {"$" + sumItem()}
              </CardTitle>
            </CardBody>
            <Button
              color="danger"
              style={{ width: "100%", margin: "20px auto" }}
              onClick={() => buy()}
            >
              Buy
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
