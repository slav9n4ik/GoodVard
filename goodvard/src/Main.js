import React, { Component, Fragment } from "react";
import "./css/main.css";
import Home from "./components/content/home/Home.js";
import Courses from "./components/content/courses/Courses.js";
import Discount from "./components/content/discount/Discount.js";
import PhotoVideo from "./components/content/photo/PhotoVideo.js";
import Results from "./components/content/results/Results.js";
import About from "./components/content/about/About.js";
import Comments from "./components/content/comments/Comments.js";
import Contacts from "./components/content/contacts/Contacts.js";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <main className="container-fluid main-container">
          <div className="row justify-content-center">
            <Home />
          </div>
          <div className="row">
            <Courses />
          </div>
          <div className="row">
            <Discount />
          </div>
          <div className="row">
            <PhotoVideo />
          </div>
          <div className="row">
            <Results />
          </div>
          <div className="row">
            <About />
          </div>
          <div className="row">
            <Comments />
          </div>
          <div className="row">
            <Contacts />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Main;