import React, { Component, Fragment } from "react";
import BigHeader from "./BigHeader.js";
import SmallHeader from "./SmallHeader.js";
import Navbar from "../navbar/Navbar.js";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  listenScrollEvent = () => {
    let navBar = document.getElementById("navbar");
    let header = document.getElementById("large-header");
    let smallHeader = document.getElementById("small-header");

    if (window.scrollY > 50) {
      header.classList.add("header-up");
      navBar.classList.add("navbar-up");
      smallHeader.classList.add("height-down");
    } else {
      header.classList.remove("header-up");
      navBar.classList.remove("navbar-up");
      smallHeader.classList.remove("height-down");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Fragment>
        <BigHeader/>
        <SmallHeader/>
        <Navbar/>
      </Fragment>
    );  
  }
}

export default Header;
