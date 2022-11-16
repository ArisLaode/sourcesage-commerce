import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import AddVariant from "./pages/AddVariant";

const App = () => (
      <>
      <Router>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/read/:productId" exact element={<ProductDetail />} />
            <Route path="/add-product" exact element={<AddProduct />} />
            <Route path="/add-variant" exact element={<AddVariant />} />
        </Routes>
      </Router>
      </>
);


export default App;
