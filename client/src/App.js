import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ProductContext } from "./components/context/productsContext";

import Header from "./components/site/header";
import Footer from "./components/site/footer";
import Home from "./components/pages/home";
import Favorite from "./components/pages/favorite";
import Shop from "./components/pages/shop";
import Detail from "./components/pages/detail";
import Login from "./components/pages/login";
import CreateUser from "./components/pages/createUser";
import { useContext } from "react";

function App(props) {
  const { user, setUser } = useContext(ProductContext);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/favorite/">
            {user ? <Favorite /> : <Redirect to="/" />}
          </Route>
          <Route path="/product/:id">
            {user ? <Detail /> : <Redirect to="/" />}
          </Route>
          <Route path="/cart/">{user ? <Shop /> : <Redirect to="/" />}</Route>
          <Route path="/newuser/">
            {user ? <Redirect to="/" /> : <CreateUser />}
          </Route>
          <Route path="/user/">{user ? <Redirect to="/" /> : <Login />}</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
