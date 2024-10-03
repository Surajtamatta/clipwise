import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({children}) => {
  return (
    <div className="flex flex-col items-start w-full">
      <Navbar/>
        <main className="flex w-full flex-col  ">
        {children}
        </main>
      <Footer/>
    </div>
  )
};

export default Layout;
