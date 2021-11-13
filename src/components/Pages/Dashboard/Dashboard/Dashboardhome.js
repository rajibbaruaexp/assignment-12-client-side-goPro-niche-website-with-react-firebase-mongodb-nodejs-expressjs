import React from "react";
import useAuth from "../../../../hooks/useAuth";
import AllOrders from "../AllOrders/AllOrders";
import MyOrders from "../MyOrders/MyOrders";

const Dashboardhome = () => {
  const { admin } = useAuth();
  return (
    <div>
      {admin ? (
        <>
          <AllOrders></AllOrders>
        </>
      ) : (
        <>
          <MyOrders></MyOrders>
        </>
      )}
    </div>
  );
};

export default Dashboardhome;
