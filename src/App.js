import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/HomePage/Homepage";
import NavBar from "./components/NavBar/NavBar";
import Users from "./Users/Users";
import Home from "./components/Home/Home";
import ForgetPassword from "./components/Forget/ForgetPassword";
import ResetPassword from "./components/Reset/ResetPassword";
import Cart from "./components/Home/Cart";
import About from "./components/About/About";
import Products from "./Products/Products";
import ProductDetailed from "./Products/ProductDetailed";
import ProductManagement from "./components/Management/ProductManagement";
import Account from "./components/Account/Account";
export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/forget_password">
            <ForgetPassword />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
          <Route path="/reset_password/:token">
            <ResetPassword />
          </Route>
          <Route exact path="/products/all">
              <Products />
          </Route>
          <Route exact path="/products/all/:id">
              <ProductDetailed />
          </Route>
          <Route exact path="/dashboard_admin">
              <ProductManagement />
          </Route>
          <Route exact path="/account">
              <Account />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
