import React, { Component, Fragment } from "react";
import './about.css';
import AboutItem from "./AboutItem.js";
import aboutArray from "./AboutArray.js";

class About extends Component {
  render() {
    let AboutComp = aboutArray.map(item => {
      return(
        <AboutItem 
          key={item.id}
          src={item.src}
          name={item.name}
          expl={item.expl}
          text={item.text}
        />
      );
    });
    return (
      <Fragment>
        <div id="about" className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 header-container">
              <p>Наша команда</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-12">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  {AboutComp}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
