import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";
const ProductManagement = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <NavLink to="/" exact className="backtohome">
            Home
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to="/dashboard_admin" exact className="admin_dashboard">
            Library
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <div>Add New Product</div>
    </>
  );
};

export default ProductManagement;
