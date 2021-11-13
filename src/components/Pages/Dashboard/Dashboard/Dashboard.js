import React from "react";
import logo from "../../../Images/logo.png";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AllOrders from "../AllOrders/AllOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../../hooks/useAuth";
import MyOrders from "../MyOrders/MyOrders";
import AddProduct from "../AddProduct/AddProduct";
import AdminRoute from "../../../shared/Header/Login/AdminRoute";
import Dashboardhome from "./Dashboardhome";
import Pay from "../Pay/Pay";
import ManageProducts from "../ManageProdcuts/ManageProducts";
import Reviews from "../Reviews/Reviews";

const Dashboard = () => {
  const { user, logout, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="h-screen w-full flex overflow-hidden select-none">
        <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4 pt-0">
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">
            {admin ? (
              <>
                <li
                  className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
                >
                  <Link
                    to={`${url}/all-orders`}
                    className=" flex flex-col items-center"
                  >
                    <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                      ></path>
                    </svg>
                    <span className="text-xs mt-2">All Orders</span>
                  </Link>
                </li>
                <li
                  className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
                >
                  <Link
                    to={`${url}/makeAdmin`}
                    className=" flex flex-col items-center"
                  >
                    <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                      ></path>
                    </svg>
                    <span className="text-xs mt-2">Make Admin</span>
                  </Link>
                </li>
                <li
                  className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
                >
                  <Link
                    to={`${url}/manage-products`}
                    className=" flex flex-col items-center"
                  >
                    <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                      ></path>
                    </svg>
                    <span className="text-xs mt-2">Manage Products</span>
                  </Link>
                </li>
                <li
                  className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
                >
                  <Link
                    to={`${url}/add-product`}
                    className=" flex flex-col items-center"
                  >
                    <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                      ></path>
                    </svg>
                    <span className="text-xs mt-2">Add Product</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li
                  className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
                >
                  <Link
                    to={`${url}/my-orders`}
                    className=" flex flex-col items-center"
                  >
                    <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                      ></path>
                    </svg>
                    <span className="text-xs mt-2">My Orders</span>
                  </Link>
                </li>
                <li
                  className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
                >
                  <Link
                    to={`${url}/pay`}
                    className=" flex flex-col items-center"
                  >
                    <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                      ></path>
                    </svg>
                    <span className="text-xs mt-2">Pay</span>
                  </Link>
                </li>
                <li
                  className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
                >
                  <Link
                    to={`${url}/review`}
                    className=" flex flex-col items-center"
                  >
                    <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                      ></path>
                    </svg>
                    <span className="text-xs mt-2">Review</span>
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div
            className="mt-auto flex items-center p-2 text-white bg-red-600
			dark:text-blue-500 rounded-full"
          >
            <button onClick={logout}>Log Out</button>
          </div>
        </nav>
        <main
          className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto cdahsboardmargning"
        >
          <div className="flex flex-col capitalize text-3xl">
            <span className="font-semibold">Hello, {user?.displayName}!</span>
            <span className="text-lg">Welcome to your Dashboard</span>
          </div>
          <div className="w-full">
            <div
              className="mr-6 mt-8 py-2 flex-shrink-0 flex flex-col
				bg-purple-300 rounded-lg text-white"
            >
              <Switch>
                <Route exact path={path}>
                  <Dashboardhome></Dashboardhome>
                </Route>
                <AdminRoute path={`${path}/all-orders`}>
                  <AllOrders></AllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/add-product`}>
                  <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/manage-products`}>
                  <ManageProducts></ManageProducts>
                </AdminRoute>
                <Route path={`${path}/my-orders`}>
                  <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/pay`}>
                  <Pay></Pay>
                </Route>
                <Route path={`${path}/review`}>
                  <Reviews></Reviews>
                </Route>
              </Switch>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
