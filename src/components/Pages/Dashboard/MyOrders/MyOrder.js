import React from "react";

const MyOrder = (props) => {
  const { _id, productName, orderStatus, orderDate } = props.order;
  const handlePurchaseDelete = (id) => {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      fetch(`https://fathomless-bayou-40164.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Your order has been cancelled!!");
          }
        });
    }
  };

  return (
    <>
      <tr style={{ height: "5px" }}></tr>
      <tr className="bg-white text-black pt-1 pb-1">
        <td>{productName}</td>
        <td className="font-bold">{orderStatus ? "Pending" : "Shipped"}</td>
        <td>{orderDate}</td>
        <td className="text-right">
          <button
            onClick={() => handlePurchaseDelete(_id)}
            className="text-white bg-red-600 p-2"
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyOrder;
