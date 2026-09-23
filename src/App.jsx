
import React from "react";
import { Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <Routes>

      {/* Common Navbar + Footer */}
      <Route element={<RootLayout />}>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Products */}
        <Route path="/products" element={<Product />} />

        {/* Product Detail */}
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  );
};

export default App;
