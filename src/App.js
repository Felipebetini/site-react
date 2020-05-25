import React, { Component } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Prices from "./components/Prices";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Portfolio />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
