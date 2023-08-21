import { Outlet } from "react-router-dom";
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
