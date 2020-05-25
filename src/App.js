import React, { Component } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./Admin/Admin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/Admin" exact component={Admin} />
          </Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Services" exact component={Services} />

          <Route path="/Contact" exact component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
