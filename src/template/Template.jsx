import { Container } from "reactstrap";
import { Outlet, Link } from "react-router-dom";
import MyHeader from "../components/MyHeader";
const Template = () => {
  return (
    <>
      <MyHeader />
      <Outlet />
    </>
  );
};

export default Template;
