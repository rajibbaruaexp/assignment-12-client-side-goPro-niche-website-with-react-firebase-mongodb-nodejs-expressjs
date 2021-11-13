import React from "react";

const AllOrder = (props) => {
  const { _id, productName, orderStatus, orderDate } = props.order;
  // console.log(props.allOrders);
  const handleOrderDelete = (id) => {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      fetch(`https://fathomless-bayou-40164.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order has been cancelled!!");
          }
        });
    }
  };
  const handleShippingApproval = (id) => {
    const confirmation = window.confirm("Are you sure?");

    if (confirmation) {
      const orderStatus = false;

      const toBeUpdate = props.allOrders.find((order) => order._id === id);

      const updatedData = { ...toBeUpdate, orderStatus };

      const url = `https://fathomless-bayou-40164.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Approved for shipping");
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
            onClick={() => handleShippingApproval(_id)}
            className="text-white bg-green-600 p-2 mr-2"
          >
            Approve
          </button>
          <button
            onClick={() => handleOrderDelete(_id)}
            className="text-white bg-red-600 p-2"
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllOrder;
