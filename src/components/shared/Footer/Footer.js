import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10  pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Getting Started
          </div>

          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Installation
          </NavLink>
          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Release Notes
          </NavLink>
          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Upgrade Guide
          </NavLink>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Core Concepts
          </div>

          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Utility-First
          </NavLink>
          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Responsive Design
          </NavLink>
          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Hover, Focus, & Other States
          </NavLink>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Customization
          </div>

          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Configuration
          </NavLink>
          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Theme Configuration
          </NavLink>
          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Breakpoints
          </NavLink>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Community
          </div>

          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            GitHub
          </NavLink>
          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Discord
          </NavLink>
          <NavLink
            to="/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Twitter
          </NavLink>
        </div>
      </div>

      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
              border-t border-gray-500 text-gray-400 text-sm 
              flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2">
            © Copyright 1998-year. All Rights Reserved.
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <NavLink to="/" className="w-6 mx-1">
              <i className="uil uil-facebook-f"></i>
            </NavLink>
            <NavLink to="/" className="w-6 mx-1">
              <i className="uil uil-twitter-alt"></i>
            </NavLink>
            <NavLink to="/" className="w-6 mx-1">
              <i className="uil uil-youtube"></i>
            </NavLink>
            <NavLink to="/" className="w-6 mx-1">
              <i className="uil uil-linkedin"></i>
            </NavLink>
            <NavLink to="/" className="w-6 mx-1">
              <i className="uil uil-instagram"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
