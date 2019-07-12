import React, { Component, Fragment } from "react";
import "./navbar.css";
import LogoBee from "../../icons/bee-logo .svg";
import GoodvardLogo from "../../icons/goodvard.svg";
import $ from "jquery";
import NavsArray from "./NavsArray.js";
import Navs from "./Navs.js";
import scrollToY from "./scrollToY.js";

$(document).ready(function() {
  $("#navbarNav").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top - 120;
    $("body,html").animate({ scrollTop: top }, 1000);
  });
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1,
      sectionsTop: []
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.scrollSmooth = this.scrollSmooth.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  clickHandler(id, href) {
    //Hide collaps in navbar on mobile
    let navMain = $("#navbarNav");
    navMain.collapse("hide");
    //this.scrollSmooth(href);

    this.setState({
      activeId: id
    });
  }

  //Animated scroll
  scrollSmooth(href) {
    let id = href.split("#")[1];
    let offsetTop = document.getElementById(id).offsetTop;
    scrollToY(offsetTop - 120, 0.001, "easeInOutQuint");
    console.log(offsetTop);
  }

  listenScrollEvent = () => {
    let {activeId, sectionsTop} = this.state;
    let currentUpOffset;
    for (let i = 0; i < sectionsTop.length; i++) {
      if (sectionsTop[i].id === activeId) {
        currentUpOffset = sectionsTop[i].offset
      } 
    }
    console.log("currentUpOffset",currentUpOffset)

    let currentDownOffset;
    if (typeof currentUpOffset !== undefined) {
      for (let i = 0; i < sectionsTop.length; i++) {
        if (sectionsTop[i].offset === currentUpOffset) {
          currentDownOffset = sectionsTop[i+1].offset;
        }
      }
      console.log("currentDownOffset", currentDownOffset)
    }
    
    if (window.scrollY+120 > currentDownOffset) {
      this.setState({
        activeId: activeId + 1
      });
    }

    if (window.scrollY+120 < currentUpOffset) {
      this.setState({
        activeId: activeId - 1
      });
    }
      // for (var i = 0; i < array.length; i++) {
      //   if (
      //     window.scrollY-120 > array[i].offset &&
      //     window.scrollY-120 < array[i + 1].offset &&
      //     this.state.activeId !== array[i].id &&
      //     i + 1 < array.length
      //   ) {
      //     this.setState({
      //       activeId: array[i].id
      //     });
      //   }
      // }
    
  };

  componentDidMount() {
    //Init offesets of sections
    let sectionsOffSets = NavsArray.map(section => {
      let id = section.href.split("#")[1];
      return {
        id: section.id,
        offset: document.getElementById(id).offsetTop - 120
      };
    });
    this.setState({
      sectionsTop: sectionsOffSets
    });
    console.log("Sections: ", sectionsOffSets);

    //window.addEventListener("scroll", this.listenScrollEvent);
    window.addEventListener("show", console.log("Appear"));
  }

  render() {
    console.log("Render id: ", this.state.activeId);
    let navsComp = NavsArray.map(item => {
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
