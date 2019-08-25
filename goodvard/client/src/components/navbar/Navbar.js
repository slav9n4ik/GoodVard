import React, { Component, Fragment } from "react";
import "./navbar.css";
import LogoBee from "../../icons/bee-logo .svg";
import GoodvardLogo from "../../icons/goodvard.svg";
import $ from "jquery";
//import 'jquery.appear';
import navsArray from "./NavsArray.js";
import Navs from "./Navs.js";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.scrollSmooth = this.scrollSmooth.bind(this);
    //this.appearComponentListener = this.appearComponentListener.bind(this);
  }

  clickHandler(id) {
    //Hide collaps in navbar on mobile
    let navMain = $("#navbarNav");
    navMain.collapse("hide");

    this.setState({
      activeId: id
    });
  }

  //Animated scroll
  scrollSmooth() {
    $(document).ready(function() {
      $("#navbarNav").on("click", "a", function(event) {
        event.preventDefault();
        let width = $(window).width();
        let offset;
        width <= 960 ? offset = -50 : offset = 120;
        var id = $(this).attr("href"),
          top = $(id).offset().top - offset;
        $("body,html").animate({ scrollTop: top }, 1200);
      });
    });
  };

  componentDidMount() {
    this.scrollSmooth();
  }

  render() {
    let navsComp = navsArray.map(item => {
      return (
        <Navs
          key={item.id}
          id={item.id}
          href={item.href}
          value={item.value}
          clickHandler={this.clickHandler}
          activeId={this.state.activeId}
        />
      );
    });

    return (
      <Fragment>
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
          <a
            className="navbar-brand justify-content-start logobee"
            href="#home"
          >
            <img
              className="logobee"
              src={LogoBee}
              width="45"
              height="45"
              alt=""
            />
          </a>
          <a className="navbar-brand justify-content-center" href="#home">
            <img
              className="logotext"
              src={GoodvardLogo}
              width="120"
              height="45" 
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">{navsComp}</ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;

//Active не работает
//Не совсем адаптивный текстf
