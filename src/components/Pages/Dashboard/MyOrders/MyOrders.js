import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const url = `https://fathomless-bayou-40164.herokuapp.com/my-orders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders, user?.email]);
  return (
    <div>
      <h3
        className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
capitalize"
      >
        <span>My Orders</span>
      </h3>
      <div className="container mx-auto pt-14">
        <div className="grid sm:grid-cols-1 gap-4">
          <div className="my-orders m-auto	w-2/3	">
            {myOrders.length === 0 ? (
              <>
                <div className="text-5xl mb-4">
                  You haven't placed any product order yet!
                </div>
              </>
            ) : (
              <>
                {" "}
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
                    {myOrders.map((order) => (
                      <MyOrder
                        order={order}
                        key={order._id}
                        myOrders={myOrders}
                        setMyOrders={setMyOrders}
                      ></MyOrder>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
