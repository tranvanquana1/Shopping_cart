import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  CardImg,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";

import { useParams } from "react-router-dom";

import favoriteFalse from "../site/icons/thumbs-up-regular.svg";
import favoriteTrue from "../site/icons/thumbs-up-solid.svg";

import { ProductContext } from "../context/productsContext";

const Detail = (props) => {
  const { cart, setCart, favorite, setFavorite, user, setUser } = useContext(
    ProductContext
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const [detail, setDetail] = useState({});

  const [mark, setMark] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/book/${id}`).then((res) => {
      setDetail(res.data);
    });
  }, []);

  const addToCart = (product) => {
    if (user != null) {
      const checkItem = cart.filter((item) => {
        return item._id == product._id;
      });
      if (checkItem.length == 0) {
        const newList = [product].concat(cart);
        setCart(newList);
      }
    }
  };

  const addToFavorite = (product) => {
    if (user != null) {
      const check = favorite.filter((item) => {
        return item._id == product._id;
      });
      if (check.length == 0) {
        const newFavo = [product].concat(favorite);
        setFavorite(newFavo);
        setMark(true);
      }
    }
  };
  const removeToFavorite = (product) => {
    const newUnFavo = favorite.filter((item) => {
      return item._id != product._id;
    });
    setFavorite(newUnFavo);
    setMark(false);
  };

  return (
    <div style={{ paddingTop: "120px", width: "85%", margin: "0 auto" }}>
      <Row style={{ fontSize: "20px" }}>
        <Col xs="12" lg="6" style={{ margin: "0 auto" }}>
          <Card>
            <CardImg
              style={{ width: 300, margin: "auto" }}
              top
              src={detail.imgURL}
              alt="Card image cap"
            />
          </Card>
        </Col>
        <Col xs="12" lg="6">
          <CardBody style={{ margin: "30px 0" }}>
            <CardTitle tag="h3" style={{ fontWeight: "bold" }}>
              {detail.title}
            </CardTitle>
            <CardText
              style={{
                fontWeight: "bold",
                color: "#8c8c8c",
                margin: "10px auto",
              }}
            >
              Category: {detail.category}
            </CardText>
            <CardSubtitle
              tag="h3"
              className="mb-2 text-muted"
              style={{ margin: "10px auto" }}
            >
              Price:
              <span style={{ color: "#ff4d4f" }}> ${detail.price}</span>
            </CardSubtitle>
            <Button
              onClick={() => addToCart(detail)}
              color="danger"
              style={{ width: "100%", marginTop: "15px" }}
            >
              Add to Cart
            </Button>
            {!mark && (
              <CardBody
                onClick={() => addToFavorite(detail)}
                style={{
                  display: "flex",
                  paddingLeft: "0px",
                  marginTop: "10px",
                }}
              >
                >
                <CardImg
                  src={favoriteFalse}
                  style={{ width: "30px", marginRight: "10px" }}
                ></CardImg>
                <CardText>Add to Favorite</CardText>
              </CardBody>
            )}
            {mark && (
              <CardBody
                onClick={() => removeToFavorite(detail)}
                style={{
                  display: "flex",
                  paddingLeft: "0px",
                  marginTop: "15px",
                }}
              >
                <CardImg
                  src={favoriteTrue}
                  style={{ width: "30px", marginRight: "10px" }}
                ></CardImg>
                <CardText>Remove to Favorite</CardText>
              </CardBody>
            )}
          </CardBody>
        </Col>

        <Col xs="12" style={{ margin: "auto" }}>
          <Container>
            <CardTitle
              tag="h3"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Description
            </CardTitle>
            <CardText
              style={{
                marginTop: "20px",
                marginBottom: "50px",
                textAlign: "center",
              }}
            >
              {detail.description}
            </CardText>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
