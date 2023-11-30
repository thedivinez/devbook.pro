import React from "react";
import Home from "./pages";
import NoPage from "./pages/nopage";
import Contact from "./pages/contact";
import AboutUs from "./pages/about-us";
import ReactDOM from "react-dom/client";
import CheckOut from "./pages/checkout";
import Layout from "./components/layout";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Toaster />
  </React.StrictMode>
);
