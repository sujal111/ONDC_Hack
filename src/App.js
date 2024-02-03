import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom";
import React, { useState } from "react";
import { NavBar } from "./components/navbar";
import { Products } from "./pages/products";
import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { NotFound } from "./pages/not-found";
import { useCart } from './context/cart';
import Header from "./components/Header/Header";
import ProductReviewList from "./components/Data/ProductReviewList";
import ProductData from "./components/Data/ProductData";
import ReviewItem from "./components/ReviewItem";
import ProductReviewStats from './components/ProductReviewStats';
import ReviewForm from './components/ReviewForm';

function App() {
  const navigate = useNavigate();
  const { cartItemCount } = useCart();
  const [review, setReview] = useState(ProductData);


  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setReview(review.filter(item => item.id !== id));
    }
};



  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`);
  };

  return (
    <>
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Header />
      <div className="container">
      <ReviewForm />

      <ProductReviewStats review={review} />
      <ProductReviewList review={review} handleDelete= {deleteFeedback} />      </div>
    </>
  );
}

export default App;
