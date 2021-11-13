import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import EmailSubscription from "./HomeSections/EmailSubscription/EmailSubscription";
import Features from "./HomeSections/Features/Features";
import GoPros from "./HomeSections/GoPros/GoPros";
import HomeAbout from "./HomeSections/HomeAbout/HomeAbout";
import ReviewsByCustomers from "./HomeSections/Reviews/ReviewsByCustomers";

const Home = () => {
  return (
    <>
      <Header></Header>
      <HomeAbout></HomeAbout>
      <Features></Features>
      <GoPros></GoPros>
      <ReviewsByCustomers></ReviewsByCustomers>
      <EmailSubscription></EmailSubscription>
      <Footer></Footer>
    </>
  );
};

export default Home;
