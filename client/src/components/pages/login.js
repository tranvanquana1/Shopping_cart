import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, CardTitle } from "reactstrap";

import { ProductContext } from "../context/productsContext";
import Axios from "axios";
const Login = (props) => {
  const { cart, setCart, favorite, setFavorite, user, setUser } = useContext(
    ProductContext
  );

  const [users, setUsers] = useState({ username: "", password: "" });

  const handleUserChange = (e) => {
    e.preventDefault();
    setUsers({ ...users, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setUsers({ ...users, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const detail = users;
    Axios.post(`http://localhost:5000/api/user/login`, detail).then((res) => {
      setUser(res.data.user);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: "120px 0", textAlign: "center" }}>
      <CardTitle tag="h2">LOGIN</CardTitle>
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
        <br />
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
        <br />
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Remember password
          </Label>
        </FormGroup>
        <br />
        <Button type="submit" color="danger" style={{ width: "100%" }}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
