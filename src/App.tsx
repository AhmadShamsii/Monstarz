import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersRequest } from "./app/users/slice";
// import { fetchNftsRequest } from "./app/nft/slice";

import Layout from "./components/layout/layout";
import About from "./routes/about";
import Contact from "./routes/contact";
import Home from "./components/home/home";
import Monsters from "./routes/monsters";
import Shop from "./routes/shop";
import Robots from "./routes/robots";
import Avatars from "./routes/avatars";
import RoboHeads from "./routes/roboHeads";
import Checkout from "./routes/checkout";
import Analytics from "./routes/analytics";
import Products from "./routes/products";
import Category from "./routes/category";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  return (
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
        <Route path={"shop/:category/checkout"} element={<Checkout />} />
        <Route path={"/analytics"} element={<Analytics />} />
        <Route path={"/analytics/products"} element={<Products />} />
        <Route path={"/analytics/category"} element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
