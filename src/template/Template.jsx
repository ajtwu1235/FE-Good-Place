import React from "react";
import { Container, Nav, NavItem, Navbar, NavLink } from "reactstrap";
import { Outlet, Link } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import Rectangle from "../components/Rectangle";
import MyFooter from "../components/MyFooter";

const Template = () => {
  return (
    <>
      <MyHeader />
        <Outlet />
      <MyFooter/>
    </>
  );
};

export default Template;
