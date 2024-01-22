import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  LoginSignup,
  Navbar,
  ParentDashboard,
  Footer,
} from "./components";
import {
  Header,
  // BookStore,
  Games,
  Facts,
  VideoStore,
  Vocabulary,
  BookStore,
  ProgramSection,
} from "./containers";
// import BookDetails from "./containers/bookstore/BookDetail";
import RockPaperScissors from "./containers/games/RockPaperScissors";
import TicTacToe from "./containers/games/TicTacToe";
import { DataProvider } from "./context/DataContext.jsx";
import PuzzleGallery from "./containers/games/PuzzleGallery";
import VideoDetail from "./containers/videostore/VideoDetail";
import BookDetails from "./containers/bookstore/BookDetail";
import ContactUs from "./containers/contact/Contact";
import Help from "./containers/help/Help";
import Puzzle from "./containers/games/puzzle.jsx";
import Slider from "./containers/slider/Slider.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/header"
          element={
            <div>
              <Navbar color="#30ff93" />
              <Header />
              <Slider />
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Navbar color="#30ff93" />
              <ContactUs />
            </div>
          }
        />
        <Route
          path="/service"
          element={
            <div>
              <Navbar color="#30ff93" />
              <ProgramSection />
              <Footer />
            </div>
          }
        />
        <Route
          path="/help"
          element={
            <div>
              <Navbar color="#30ff93" />
              <Help />
            </div>
          }
        />
        <Route
          path="/games"
          element={
            <div>
              <Navbar color="#ffd800" />
              <Games />
            </div>
          }
        />
        <Route
          path="/games/RockPaperScissors"
          element={<RockPaperScissors />}
        />
        <Route path="/games/TicTacToe" element={<TicTacToe />} />
        <Route
          path="/games/Puzzle"
          element={
            <div>
              <DataProvider>
                <Puzzle />
                <PuzzleGallery />
              </DataProvider>
            </div>
          }
        />

        <Route
          path="/bookstore"
          element={
            <div>
              <Navbar color="#30ff93" />
              <BookStore />
            </div>
          }
        />
        <Route path="/bookstore/:bookId" element={<BookDetails />} />
        <Route
          path="/videostore"
          element={
            <div>
              <Navbar color="#30ff93" />
              <VideoStore />
            </div>
          }
        />
        <Route path="/videostore/:videoId" element={<VideoDetail />} />
        <Route
          path="/vocabulary"
          element={
            <div>
              <Navbar color="#30ff93" />
              <Vocabulary />
            </div>
          }
        />
        <Route
          path="/facts"
          element={
            <div>
              <Navbar color="#30ff93" />
              <Facts />
            </div>
          }
        />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/parentdashboard" element={<ParentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
