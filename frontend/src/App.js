import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductsList from "./components/ProductsList";
import CreateProduct from "./components/CreateProduct";
import Sells from "./components/Sells";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <div className="">
              <ProductsList />
            </div>
          }
        />
        <Route
          path="/:id"
          element={
            <div className="">
              <Sells />
              <ProductsList />
            </div>
          }
        />
        <Route path="/edit/:id" element={<CreateProduct />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
