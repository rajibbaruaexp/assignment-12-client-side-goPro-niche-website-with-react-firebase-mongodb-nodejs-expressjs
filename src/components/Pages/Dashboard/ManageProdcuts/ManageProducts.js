import React, { useEffect, useState } from "react";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://fathomless-bayou-40164.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <>
      <h3
        className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
capitalize"
      >
        <span>All Available Products</span>
      </h3>
      <div>
        <div className="container mx-auto pt-14">
          <div className="grid sm:grid-cols-1 gap-4">
            <div className="my-orders m-auto	w-2/3	">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-800 text-white pt-4">
                    <th className="w-3/4 p-2">Product</th>
                    <th className="w-1/4 p-2">Delete Product</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <ManageProduct
                      product={product}
                      key={product._id}
                      products={products}
                    ></ManageProduct>
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

export default ManageProducts;
