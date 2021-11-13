import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import EmailSubscription from "./HomeSections/EmailSubscription/EmailSubscription";
import Features from "./HomeSections/Features/Features";
import GoPros from "./HomeSections/GoPros/GoPros";
import HomeAbout from "./HomeSections/HomeAbout/HomeAbout";
import Reviews from "./HomeSections/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Header></Header>
      <HomeAbout></HomeAbout>
      <Features></Features>
      <GoPros></GoPros>
      <Reviews></Reviews>
      <EmailSubscription></EmailSubscription>
      <Footer></Footer>
    </>
  );
};

export default Home;
