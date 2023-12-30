import { Divider } from "antd";
import Foooter from "../../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../app/products/selector";
import { useState } from "react";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../app/products/slice";
import ItemModal from "../../components/itemModal";
import { Helmet } from "react-helmet-async";
import Carousel from "./components/Carousel";
import ShopByCatgory from "./components/ShopByCategory";
import Trending from "./components/Trending";
import BestSellers from "./components/BestSellers";
import Features from "./components/Features";

const Home = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector(productsSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardClicked, setCardClicked] = useState("");

  const handleFavourite = (index) => {
    const favouriteExists = favourites.includes(index);

    if (favouriteExists) {
      dispatch(removeFromFavourites({ index, favourites }));
    } else {
      dispatch(addToFavourites({ index, favourites }));
    }
  };

  const showModal = (user) => {
    setIsModalOpen(true);
    setCardClicked(user);
  };
  return (
    <>
      <Helmet>
        <title>Monstarz</title>
      </Helmet>
      <Carousel />
      <ShopByCatgory />
      <ItemModal
        item={cardClicked}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Trending showModal={showModal} handleFavourite={handleFavourite} />
      <BestSellers showModal={showModal} handleFavourite={handleFavourite} />
      <Divider />
      <Features />
      <Foooter margintop="" />
    </>
  );
};
export default Home;
