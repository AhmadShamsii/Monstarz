import { SpeedInsights } from "@vercel/speed-insights/react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsRequest } from "./app/products/slice";
import { fetchUsersRequest } from "./app/users/slice";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./components/layout";
import About from "./routes/about";
import Contact from "./routes/contact";
import Home from "./routes/home";
import Monsters from "./routes/monsters";
import Shop from "./routes/shop";
import Robots from "./routes/robots";
import Avatars from "./routes/avatars";
import RoboHeads from "./routes/roboHeads";
import Checkout from "./routes/checkout";
import Analytics from "./routes/analytics";
import Products from "./routes/products";
import Customers from "./routes/customers";
import Orders from "./routes/orders";
import OrderDetails from "./routes/orderDetails";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsRequest());
    dispatch(fetchUsersRequest());
  }, []);

  const helmetContext = {};

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/monsters" element={<Monsters />} />
            <Route path="shop/robots" element={<Robots />} />
            <Route path="shop/avatars" element={<Avatars />} />
            <Route path="shop/roboHeads" element={<RoboHeads />} />
            <Route path={"checkout"} element={<Checkout />} />
            <Route path={"/analytics"} element={<Analytics />} />
            <Route path={"/analytics/products"} element={<Products />} />
            <Route path={"/analytics/customers"} element={<Customers />} />
            <Route path={"/analytics/orders"} element={<Orders />} />
            <Route
              path={"/analytics/orders/:orderId"}
              element={<OrderDetails />}
            />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
      <SpeedInsights />
    </>
  );
};

export default App;
