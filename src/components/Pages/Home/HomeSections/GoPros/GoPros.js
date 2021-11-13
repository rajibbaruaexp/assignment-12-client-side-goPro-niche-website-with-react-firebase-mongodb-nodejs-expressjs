import React, { useEffect, useState } from "react";
import GoPro from "../GoPro/GoPro";

const GoPros = () => {
  const [goPros, setGoPros] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-bayou-40164.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setGoPros(data));
  }, [goPros]);
  return (
    <>
      <div className="title p-14 bg-indigo-600 text-white mb-14">
        <h1 className="text-4xl	">Featured GoPros</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-3 gap-4">
          {goPros.length === 0 ? (
            <>
              <div></div>
              <div className="home-spinner">
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
              </div>
              <div></div>
            </>
          ) : (
            <>
              {goPros.slice(0, 6).map((goPro) => (
                <GoPro key={goPro._id} goPro={goPro}></GoPro>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GoPros;

// {/* <SingleGoPro key={goPro._id} goPro={goPro}></SingleGoPro> */}
