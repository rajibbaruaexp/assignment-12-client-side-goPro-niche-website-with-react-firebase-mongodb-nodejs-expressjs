import React, { useEffect, useState } from "react";
import Header from "../../shared/Header/Header";
import BreadCumbs from "../../sharedSections/BreadCumbs/BreadCumbs";
import GoPro from "../../Pages/Home/HomeSections/GoPro/GoPro";
import Footer from "../../shared/Footer/Footer";

const Explore = () => {
  const [goPros, setGoPros] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-bayou-40164.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setGoPros(data));
  }, [goPros]);
  return (
    <>
      <Header></Header>
      <BreadCumbs title={"Explore All Cameras"}></BreadCumbs>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-3 gap-4">
          {goPros.length === 0 ? (
            <>
              <div className="cspinner">
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
              </div>
            </>
          ) : (
            <>
              {goPros.map((goPro) => (
                <GoPro key={goPro._id} goPro={goPro}></GoPro>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explore;
