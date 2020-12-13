import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
} from "reactstrap";
import { InputGroup, Input } from "reactstrap";

import fbIcon from "./icons/facebook-square-brands.svg";
import twitterIcon from "./icons/twitter-brands.svg";
import youtubeIcon from "./icons/youtube-brands.svg";

const footer = () => {
  return (
    <Container
      style={{
        borderTop: "1px solid black",
        borderRadius: "30px",
        paddingTop: "30px",
        textAlign: "center",
        maxWidth: "100%",
      }}
    >
      <Row
        style={{
          width: "80%",
          margin: "30px auto",
          fontFamily: "sans-serif",
          fontSize: "22px",
        }}
      >
        <Col xs="12">
          <CardTitle tag="h2">SUBSCRIBE TO E-NEWSLETTER</CardTitle>
        </Col>
      </Row>
      <Row
        style={{
          width: "80%",
          margin: "30px auto",
          fontFamily: "sans-serif",
          fontSize: "22px",
        }}
      >
        <Col xs="12">
          <CardText>
            Subscribe to be notified of new books and announcements.
          </CardText>
        </Col>
      </Row>
      <Row
        style={{
          width: "80%",
          margin: "30px auto",
          fontFamily: "sans-serif",
          fontSize: "22px",
          textTransform: "uppercase",
        }}
      >
        <Col xs="12" lg="8" style={{ margin: "auto" }}>
          <InputGroup
            style={{ width: "90%", height: "40px", margin: "20px auto" }}
          >
            <Input placeholder="E-mail" style={{ height: "40px" }} />
            <Button color="danger">SUBSCRIBE</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row
        style={{
          maxWidth: "80%",
          fontFamily: "sans-serif",
          margin: "auto",
          fontSize: "22px",
          textTransform: "uppercase",
        }}
      >
        <Col xs="6" lg="3" style={{ margin: "10px 0" }}>
          <CardText>About Us</CardText>
        </Col>
        <Col xs="6" lg="3" style={{ margin: "10px 0" }}>
          <CardText>Authors</CardText>
        </Col>
        <Col xs="6" lg="3" style={{ margin: "10px 0" }}>
          <CardText>Books</CardText>
        </Col>
        <Col xs="6" lg="3" style={{ margin: "10px 0" }}>
          <CardText>Contact</CardText>
        </Col>
      </Row>
      <Row
        style={{
          width: "40%",
          margin: "30px auto",
          alignItems: "center",
        }}
      >
        <Col xs="4">
          <CardImg src={fbIcon} style={{ width: "20px" }}></CardImg>
        </Col>
        <Col xs="4">
          <CardImg src={twitterIcon} style={{ width: "20px" }}></CardImg>
        </Col>
        <Col xs="4">
          <CardImg src={youtubeIcon} style={{ width: "20px" }}></CardImg>
        </Col>
      </Row>
      <Row style={{ margin: "30px" }}>
        <Col xs="12">
          <CardSubtitle style={{ fontSize: "20px", color: "#595959" }}>
            Bookshop / All rights reserved.
          </CardSubtitle>
        </Col>
      </Row>
    </Container>
  );
};

export default footer;
