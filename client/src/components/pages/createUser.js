import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardTitle,
  CardText,
} from "reactstrap";

import { ProductContext } from "../context/productsContext";
import Axios from "axios";
import { Link } from "react-router-dom";
const CreateUser = (props) => {
  const { cart, setCart, favorite, setFavorite, user, setUser } = useContext(
    ProductContext
  );

  const [users, setUsers] = useState({ username: "", name: "", password: "" });

  const handleUserChange = (e) => {
    e.preventDefault();
    setUsers({ ...users, username: e.target.value });
    console.log(e.target.value);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setUsers({ ...users, name: e.target.value });
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setUsers({ ...users, password: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const detail = users;
    Axios.post(`http://localhost:5000/api/user/`, detail).then((res) => {
      const newUser = res.data;
      setUser(res.data);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: "120px 0", textAlign: "center" }}>
      <CardTitle tag="h2">New User</CardTitle>
      <Form
        action="/"
        method="GET"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          border: "1px solid #bfbfbf",
          borderRadius: "10px",
          width: "50%",
          textAlign: "center",
          margin: "auto",
          padding: "30px 30px",
        }}
      >
        <FormGroup>
          <Label for="username"></Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            autoFocus
            style={{
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#f0f0f0",
              height: "50px",
            }}
            onChange={handleUserChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            style={{
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#f0f0f0",
              height: "50px",
            }}
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            style={{
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#f0f0f0",
              height: "50px",
            }}
            onChange={handlePasswordChange}
          />
        </FormGroup>

        <Button type="submit" color="danger" style={{ width: "100%" }}>
          Create
        </Button>
        <div style={{ marginTop: "20px" }}>
          <CardText>or</CardText>
          <Link
            to="/user"
            style={{
              textDecoration: "none",
              color: "black",
              fontStyle: "inherit",
            }}
          >
            Have user.
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default CreateUser;
