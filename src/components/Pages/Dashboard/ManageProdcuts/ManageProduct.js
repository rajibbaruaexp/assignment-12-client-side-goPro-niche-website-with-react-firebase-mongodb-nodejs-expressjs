import React from "react";

const ManageProduct = (props) => {
  const { _id, name } = props.product;

  // console.log(props.allOrders);
  const handleProductDelete = (id) => {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      fetch(`https://fathomless-bayou-40164.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product has been deleted!!");
          }
        });
    }
  };

  return (
    <>
      <tr style={{ height: "5px" }}></tr>
      <tr className="bg-white text-black pt-1 pb-1 text-left">
        <td className="pl-4">{name}</td>
        <td className="text-right">
          <button
            onClick={() => handleProductDelete(_id)}
            className="text-white bg-red-600 p-2"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageProduct;
