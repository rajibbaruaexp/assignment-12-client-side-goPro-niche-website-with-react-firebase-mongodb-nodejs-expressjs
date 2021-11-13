import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import Header from "../../shared/Header/Header";
import BreadCumbs from "../../sharedSections/BreadCumbs/BreadCumbs";
import "./CheckOut.css";
//toast notification
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../shared/Footer/Footer";

const CheckOut = () => {
  let { id } = useParams();
  const [goPros, setGoPros] = useState([]);
  const [goPro, setGoPro] = useState({});
  const { user } = useAuth();

  const initialOrderInfo = {
    productName: goPro?.name,
    name: user?.displayName,
    email: user?.email,
    orderStatus: true,
  };
  const [orderInfo, setOrderInfo] = useState(initialOrderInfo);

  //fetching data from server
  useEffect(() => {
    fetch("https://fathomless-bayou-40164.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setGoPros(data));
  }, []);

  //finding data from fetched data
  useEffect(() => {
    const foundResult = goPros.find((goPro) => goPro._id === id);
    setGoPro(foundResult);
  }, [id, goPros]);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newOrderInfo = { ...initialOrderInfo };
    newOrderInfo[field] = value;
    setOrderInfo(newOrderInfo);
  };
  const handleCheckOut = (e) => {
    e.preventDefault();

    //collect orders
    const orders = {
      ...orderInfo,
      orderDate: new Date().toLocaleDateString(),
    };

    //send orders to server
    fetch("https://fathomless-bayou-40164.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          notify("Your order has been placed successfully!");
        }
      });
  };
  //toast notification
  const notify = (notificationMessage) => toast(notificationMessage);
  return (
    <>
      <Header></Header>
      <BreadCumbs goPro={goPro}></BreadCumbs>
      <div className="container mx-auto px-4">
        <div className="checkout-wrapper mt-24">
          <div className="grid grid-cols-2 gap-4">
            <div className="product-meta">
              <img src={goPro?.img} alt="" />
              <div className="product-details">
                <h2 className="text-2xl font-bold">{goPro?.name}</h2>
                <p>{goPro?.details}</p>
                <h2 className="text-2xl font-bold">Price: {goPro?.price}</h2>
              </div>
            </div>

            <div className="checkOutForm">
              <form onSubmit={handleCheckOut}>
                <input
                  required
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  defaultValue={user?.displayName}
                />

                <input
                  required
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue={user?.email}
                />

                <input
                  required
                  type="number"
                  name="phone"
                  onBlur={handleOnBlur}
                  placeholder="Your Phone Number"
                />
                <input
                  required
                  type="text"
                  name="address"
                  onBlur={handleOnBlur}
                  placeholder="You Address"
                />
                <input type="submit" value="Purchase" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer></Footer>
    </>
  );
};

export default CheckOut;
