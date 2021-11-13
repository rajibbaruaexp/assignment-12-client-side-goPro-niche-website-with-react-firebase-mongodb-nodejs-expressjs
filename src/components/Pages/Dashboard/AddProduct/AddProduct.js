import React, { useRef } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const nameRef = useRef("");
  const priceRef = useRef("");
  const detailsRef = useRef("");
  const imgRef = useRef("");

  const handleAddNewProduct = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const details = detailsRef.current.value;
    const img = imgRef.current.value;

    const newProduct = { name, price, details, img };

    //send product to database
    fetch("https://fathomless-bayou-40164.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        nameRef.current.value = "";
        priceRef.current.value = "";
        detailsRef.current.value = "";
        imgRef.current.value = "";

        if (data.insertedId) {
          alert("New Product Added Successfully");
        }
      });
  };
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-4 md:gap-6 uploadProduct">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-white">
                Add new product
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                You can upload a product
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleAddNewProduct}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <input
                    required
                    ref={nameRef}
                    type="text"
                    name="name"
                    placeholder="Prodcut Name"
                  />
                  <input
                    required
                    type="text"
                    name="price"
                    ref={priceRef}
                    placeholder="Prodcut Price"
                  />

                  <textarea
                    required
                    ref={detailsRef}
                    name="details"
                    placeholder="Prodcut Details"
                  ></textarea>
                  <input
                    required
                    ref={imgRef}
                    type="text"
                    name="img"
                    placeholder="Upload Image"
                  />

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Product Photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
