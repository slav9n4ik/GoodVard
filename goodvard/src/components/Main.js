import React, { Component, Fragment } from "react";
import "../css/main.css";
import Home from "./content/home/Home.js";
import Courses from "./content/courses/Courses.js";
import Discount from "./content/discount/Discount.js";
import PhotoVideo from "./content/photo/PhotoVideo.js";
import Results from "./content/results/Results.js";
import About from "./content/about/About.js";
import Comments from "./content/comments/Comments.js";
import Contacts from "./content/contacts/Contacts.js";
import  $ from "jquery";

$(document).ready(function() {
$(".appear").on("appear", function(data) {
  console.log("Apppear jquery")
  var id = $(this).attr("id");
  $('#navbarNav .nav li').removeClass('active');
  $("#navbarNav .nav a[href='#" + id + "']").parent().addClass("active");					
});
});

$("appear").ready(function(){
  console.log("I showed up");   
});

class Main extends Component {
  render() {
    return (
      <Fragment>
        <main className="container-fluid main-container">
          <div className="row appear">
            <Home />
          </div>
          <div className="row appear">
            <Courses />
          </div>
          <div className="row appear">
            <Discount />
          </div>
          <div className="row appear">
            <PhotoVideo />
          </div>
          <div className="row appear">
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
