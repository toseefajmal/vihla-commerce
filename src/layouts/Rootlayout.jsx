import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;