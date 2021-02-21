import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Locations from "./LocationsComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { MENU } from "../shared/menu";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/aboutus" render={() => <About />} />
          <Route exact path="/menu" render={() => <Menu />} />
          <Route exact path="/locations" render={() => <Locations />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
