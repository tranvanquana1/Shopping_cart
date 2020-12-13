import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";

import { ProductContext } from "../context/productsContext";
import favoriteFalse from "../site/icons/thumbs-up-regular.svg";
import favoriteTrue from "../site/icons/thumbs-up-solid.svg";

const Favorite = (props) => {
  const { cart, setCart, favorite, setFavorite, user, setUser } = useContext(
    ProductContext
  );

  console.log(favorite);

  function addToCart(product) {
    if (user != null) {
      const checkItem = cart.filter((item) => {
        return item._id == product._id;
      });
      if (checkItem.length == 0) {
        const newList = [product].concat(cart);
        setCart(newList);
      }
    }
  }

  const removeToFavorite = (product) => {
    console.log("remove");
    const newUnFavo = favorite.filter((item) => {
      return item._id != product._id;
    });
    setFavorite(newUnFavo);
  };

  return (
    <Container style={{ paddingTop: "120px", width: "90%" }}>
      <CardTitle
        tag="h3"
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        My Favorites
      </CardTitle>
      <Row style={{ margin: "auto", padding: "0" }}>
        {favorite.map((product) => (
          <Col
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            key={product._id}
            style={{ boxSizing: "border-box", padding: "5px" }}
          >
            <Card style={{ border: "none", margin: "0", padding: "0" }}>
              <Link to={`/product/${product._id}`}>
                <CardImg top width="100%" src={product.imgURL} />
              </Link>
              <CardBody onClick={() => removeToFavorite(product)}>
                <CardImg src={favoriteTrue} style={{ width: "30px" }}></CardImg>
              </CardBody>
              <CardBody>
                <CardTitle
                  tag="h5"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {product.title}
                </CardTitle>
                <Button
                  onClick={() => addToCart(product)}
                  color="danger"
                  style={{ width: "100%" }}
                >
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
            <br />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favorite;
