import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { Signup } from "./pages/signup/Signup";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
