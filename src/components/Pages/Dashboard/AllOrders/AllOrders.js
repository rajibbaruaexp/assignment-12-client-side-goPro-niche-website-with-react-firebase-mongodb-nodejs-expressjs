import React, { useEffect, useState } from "react";
import AllOrder from "./AllOrder";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  //delete orders
  useEffect(() => {
    const url = `https://fathomless-bayou-40164.herokuapp.com/all-orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);
  return (
    <>
      <h3
        className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
capitalize"
      >
        <span>All Customers Orders</span>
      </h3>
      <div>
        <div className="container mx-auto pt-14">
          <div className="grid sm:grid-cols-1 gap-4">
            <div className="my-orders m-auto	w-2/3	">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-800 text-white pt-4">
                    <th className="w-1/4 p-2">Product</th>
                    <th className="w-1/4 p-2">Status</th>
                    <th className="w-1/4 p-2">Order Date</th>
                    <th className="w-1/4 p-2">Cancel Order</th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders.map((order) => (
                    <AllOrder
                      order={order}
                      key={order._id}
                      allOrders={allOrders}
                    ></AllOrder>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrders;
