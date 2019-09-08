import React, { Component, Fragment } from "react";
import './about.css';
import Slider from "react-slick";
import AboutItem from "./AboutItem.js";
import aboutArray from "./AboutArray.js";

class About extends Component {
  render() {

    var settings = {
      dots: true,
      swipeToSlide: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2,
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

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
            <div className="col-12">
                <Slider {...settings}>
                  {AboutComp}
                </Slider>
              {/* <div className="container-fluid">
                <div className="row justify-content-center">
                  {AboutComp}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
