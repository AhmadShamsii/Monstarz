import Nav from "../nav";

import { Outlet } from "react-router";

const Layout = () => {

  return (
    <>
      <Nav />
      <div
        style={{
          height: "10px",
        }}
      ></div>
      <Outlet />
    </>
  );
};

export default Layout;
