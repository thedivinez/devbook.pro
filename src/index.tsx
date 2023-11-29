import React from "react";
import Home from "./pages";
import NoPage from "./pages/nopage";
import Contact from "./pages/contact";
import ReactDOM from "react-dom/client";
import CheckOut from "./pages/checkout";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkOut" element={<CheckOut />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
