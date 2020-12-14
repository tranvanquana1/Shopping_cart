import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  CardImg,
  Button,
  CardTitle,
  CardBody,
} from "reactstrap";

import Product from "./product";

import trendBook from "./image/trends-books.png";
import newBook from "./image/news-books.png";
import yourBook from "./image/for-you-books.png";
import history from "./image/history.png";
import business from "./image/business.png";
import romance from "./image/romance.png";
import { Link } from "react-router-dom";
const Home = (props) => {
  const [filter, setFilter] = useState("");

  const filterProduct = (category) => {
    const loc = category;
    setFilter(loc);
  };
  return (
    <Container style={{ margin: "auto", paddingTop: "100px", width: "90%" }}>
      <Row>
        <Col xs="12" lg="6" style={{}}>
          <CardImg
            src={trendBook}
            style={{ height: "100%", padding: "16px 0px" }}
          ></CardImg>
          <div
            style={{
              marginLeft: "10%",
              padding: "10vh 0px",
              position: "absolute",
              marginTop: "-50%",
              color: "white",
            }}
          >
            <h3>Trends Books</h3>
            <Button color="danger">Buy Now</Button>
          </div>
        </Col>

        <Col xs="12" lg="6">
          <CardImg
            src={newBook}
            style={{ height: "50%", padding: "16px 0px" }}
          ></CardImg>
          <div
            style={{
              marginLeft: "10%",
              padding: "20px 0px",
              position: "absolute",
              marginTop: "-30%",
              color: "white",
            }}
          >
            <h3>News</h3>
            <Button color="danger">Buy Now</Button>
          </div>

          <CardImg
            src={yourBook}
            style={{ height: "50%", padding: "16px 0px" }}
          ></CardImg>
          <div
            style={{
              marginLeft: "10%",
              padding: "20px 0px",
              position: "absolute",
              marginTop: "-30%",
              color: "white",
            }}
          >
            <h3>For You</h3>
            <Button color="danger">Buy Now</Button>
          </div>
        </Col>

        <Col xs="6" lg="6" style={{ margin: "10px 0" }}>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <h3>Categories</h3>
          </Link>
        </Col>
        <Col xs="6" lg="6" style={{ textAlign: "right", margin: "10px 0" }}>
          <Link
            to="#"
            style={{
              textDecoration: "none",
              color: "#f5222d",
            }}
          >
            <h3>More</h3>
          </Link>
        </Col>

        <Col xs="6" md="4" lg="4" style={{ margin: "10px 0" }}>
          <CardBody
            onClick={() => filterProduct("romance")}
            style={{ padding: "0" }}
          >
            <CardImg src={history}></CardImg>
            <div
              style={{
                position: "absolute",
                marginTop: "-40%",
                marginLeft: "20%",
                color: "white",
              }}
            >
              <h3>Romance</h3>
            </div>
          </CardBody>
        </Col>
        <Col xs="6" md="4" lg="4" style={{ margin: "10px 0" }}>
          <CardBody
            onClick={() => filterProduct("business")}
            style={{ padding: "0" }}
          >
            <CardImg src={business}></CardImg>
            <div
              style={{
                position: "absolute",
                marginTop: "-40%",
                marginLeft: "20%",
                color: "white",
              }}
            >
              <h3>Business</h3>
            </div>
          </CardBody>
        </Col>
        <Col xs="6" md="4" lg="4" style={{ margin: "10px 0" }}>
          <CardBody
            onClick={() => filterProduct("history")}
            style={{ padding: "0" }}
          >
            <CardImg src={romance}></CardImg>
            <div
              style={{
                position: "absolute",
                marginTop: "-40%",
                marginLeft: "20%",
                color: "white",
              }}
            >
              <h3>History</h3>
            </div>
          </CardBody>
        </Col>

        <Col xs="8" lg="6" style={{ margin: "10px 0" }}>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <h3>News</h3>
          </Link>
        </Col>
        <Col xs="4" lg="6" style={{ textAlign: "right", margin: "10px 0" }}>
          <Link to="#" style={{ textDecoration: "none", color: "#f5222d" }}>
            <h3>More</h3>
          </Link>
        </Col>
      </Row>

      <Product category={filter} />
    </Container>
  );
};

export default Home;
