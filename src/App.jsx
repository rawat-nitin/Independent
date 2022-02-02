import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";
import SideBar from "./SideBar";
import ProductByID from "./ProductByID";
import NewCustomer from "./InsertCustomer";
import UpdateCustomer from "./UpdateCustomer";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      <HashRouter>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              {this.state.isLoggedIn ? <SideBar></SideBar> : ""}
            </div>
            <div className="col-lg-9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Login
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  }
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/customers" element={<CustomersList />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/product/:id" element={<ProductByID />} />
                <Route path="/new-customer" element={<NewCustomer />} />
                <Route path="/edit-customer/:id" element={<UpdateCustomer />} />
                <Route path="*" element={<NoMatchPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }

  //This method can be called by child components to update isLoggedIn property of the state
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
}
