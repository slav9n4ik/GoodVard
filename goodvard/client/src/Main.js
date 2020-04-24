import React, { Component, Fragment } from "react";
import "./css/main.css";
import Home from "./components/content/home/Home.js";
import Courses from "./components/content/courses/Courses.js";
import Discount from "./components/content/discount/Discount.js";
import PhotoVideo from "./components/content/photovideo/PhotoVideo.js";
import Results from "./components/content/results/Results.js";
import About from "./components/content/about/About.js";
import Comments from "./components/content/comments/Comments.js";
import Contacts from "./components/content/contacts/Contacts.js";
import Advantages from "./components/content/advantages/Advantages.js";
import Footer from "./components/footer/Footer.js";

import handleViewport from 'react-in-viewport';

const ViewportResults = handleViewport(Results);

class Main extends Component {
  render() {
    return (
      <Fragment>
        <main className="container-fluid main-container">
          <div className="row justify-content-center">
            <Home/>
          </div>
          <div id="advantages" className="row justify-content-center bee-bg">
            <Advantages />
          </div>
          <div className="row yellow-bg">
            <Courses/>
          </div>
          <div className="row bee-bg">
            <Discount />
          </div>
          <div className="row yellow-bg">
            <ViewportResults/>
          </div>
          <div className="row bee-bg">
            <PhotoVideo/>
          </div>
          <div className="row yellow-bg">
            <About/>
          </div>
          <div className="row bee-bg">
            <Comments/>
          </div>
          <div className="row yellow-bg">
            <Contacts/>
          </div>
          <div className="row footer-bg">
            <Footer/>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Main;
