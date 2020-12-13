import React from "react";
import { Container, Row, Col, CardImg, Button } from "reactstrap";

import trendBook from "./image/trends-books.png";
import newBook from "./image/news-books.png";
import yourBook from "./image/for-you-books.png";
import history from "./image/history.png";
import business from "./image/business.png";
import romance from "./image/romance.png";

const Slide = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <div
            style={{
              marginLeft: '30px',
              padding: '20px 0px',
              position: "absolute",
              marginTop: "42%",
              color: 'white'
            }}
          >
            <h3>Trends Books</h3>
            <Button color='danger'>Buy Now</Button>
          </div>
          <CardImg
            src={trendBook}
            style={{ height: "100%", padding: "16px 0px" }}
          ></CardImg>
        </Col>

        <Col xs="6">
          <div
            style={{
              marginLeft: '30px',
              padding: '20px 0px',
              position: "absolute",
              marginTop: "8%",
              color: 'white'
            }}
          >
            <h3>Trends Books</h3>
            <Button color='danger'>Buy Now</Button>
          </div>
          <CardImg
            src={newBook}
            style={{ height: "50%", padding: "16px 0px" }}
          ></CardImg>

          <div
            style={{
              marginLeft: '30px',
              padding: '20px 0px',
              position: "absolute",
              marginTop: "8%",
              color: 'white'
            }}
          >
            <h3>Trends Books</h3>
            <Button color='danger'>Buy Now</Button>
          </div>
          <CardImg
            src={yourBook}
            style={{ height: "50%", padding: "16px 0px" }}
          ></CardImg>
        </Col>

        <Col xs="6"><h3>Categories</h3></Col>
        <Col xs="6" style={{textAlign: 'right', color: '#f5222d'}}><h4>More</h4></Col>

        <Col sm="4"><CardImg src={history}></CardImg></Col>
        <Col sm="4"><CardImg src={business}></CardImg></Col>
        <Col sm="4"><CardImg src={romance}></CardImg></Col>

        <Col xs="6"><h3>News</h3></Col>
        <Col xs="6" style={{textAlign: 'right', color: '#f5222d'}}><h4>More</h4></Col>
      </Row>
    </Container>
  );
};

export default Slide;
