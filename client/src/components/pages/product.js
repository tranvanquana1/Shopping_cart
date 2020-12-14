import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";

import { ProductContext } from "../context/productsContext";
import Pagi from "../site/pagination";

const Product = (props) => {
  const { cart, setCart, favorite, setFavorite, user, setUser } = useContext(
    ProductContext
  );

  const [book, setBook] = useState([]);
  const [pagination, setPagination] = useState({ page: 1 });
  const [bookInit, setBookInit] = useState([]);

  useEffect(() => {
    console.log("-----", pagination.page);
    axios
      .get(`http://localhost:5000/api/book/page/${pagination.page}`)
      .then((res) => {
        setBook(res.data);
        setBookInit(res.data);
      });
  }, [pagination.page]);

  useEffect(() => {
    console.log(props.category);
    const newList = bookInit.filter((item) => {
      return item.category == props.category;
    });
    setBook(newList);
  }, [props.category]);

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

  const changePage = (newPage) => {
    const number = newPage;
    setPagination({ page: number });
  };

  return (
    <div>
      <Row style={{ margin: "auto", padding: "0" }}>
        {book.map((product) => (
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
      <Pagi onPageChange={changePage} />
    </div>
  );
};

export default Product;
