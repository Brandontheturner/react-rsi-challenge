import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Columns from "./Components/Columns";
import Revenue from "./Components/Revenue";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Columns />
      <Revenue />
      <Footer />
    </div>
  );
}

export default App;
