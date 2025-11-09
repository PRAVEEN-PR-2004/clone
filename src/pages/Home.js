import  { useEffect } from "react";

import Banner from "../components/js/Banner";
import TextCard from "../components/js/TextCard";
import ImgBanner from "../components/js/imgbanner";

import Spot from "../components/js/Spot";
import Content from "../components/js/Content";
import Address from "../components/js/Address";
import Familytour from "../components/js/Familytour";
import Footer from "../components/js/Footer";
import Slider1 from "../components/js/Slider1";
import Slider2 from "../components/js/Slider2";
import Slider3 from "../components/js/Slider3";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <Spot />
      <TextCard />
      <ImgBanner />
      <Content />
      <Slider1 />
      <Familytour />
      <Slider2 />
      <Slider3 />
      <Address />
      <Footer />
    </>
  );
};

export default Home;
