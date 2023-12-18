import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, LoginSignup, Navbar, ParentDashboard } from "./components";
import {
  Header,
  BookStore,
  Games,
  Facts,
  VideoStore,
  Vocabulary,
} from "./containers";
import BookDetails from "./containers/bookstore/BookDetail";
// import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/games" element={<Games />} />
        <Route path="/bookstore" element={

          <div>
            <Navbar color="#30ff93"/>
            <BookStore />
          </div>}
         />
        <Route path="/bookstore/:bookId" element={<BookDetails />} />
        <Route path="/videostore" element={<VideoStore />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/parentdashboard" element={<ParentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
