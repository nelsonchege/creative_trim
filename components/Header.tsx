import React from "react";
import NavBar from "./NavBar";

type Props = {};

const Header = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)",
      }}
      className="w-full h-screen  bg-center bg-cover"
    >
      <div className="w-full h-screen  px-3 py-5  bg-black bg-opacity-70 text-white flex flex-col items-center justify-between">
        <NavBar />
        <div className="flex flex-col items-center w-2/3 gap-5">
          <h1 className="font-extrabold text-4xl text-center">
            Your story starts with us.
          </h1>
          <p className="text-center text-lg text-gray-300/80">
            This is a simple example of a Landing Page you can build using
            Material Tailwind. It features multiple components based on the
            Tailwind CSS and Material Design by Google.
          </p>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Header;
