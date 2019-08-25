import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "./discount.css";
// import discountArray from "./discountArray.js";
import discountImg1 from "../../../img/discount1.png";
import discountImg2 from "../../../img/discount2.png";
import discountImg3 from "../../../img/discount3.png";

class Discount extends Component {
  render() {

    var settings = {
      dots: true,
      swipeToSlide: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
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

    return (
      <Fragment>
        <div id="discount" className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 header-container">
              <p>Акции</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-12">
              <div className="container-fluid discount-container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <Slider {...settings}>
                      <img src={discountImg1} alt=''/>
                      <img src={discountImg2} alt=''/>
                      <img src={discountImg3} alt=''/>
                    </Slider>
                  </div>
                  {/* <div className="col-sm-4">
                    <img src={discountImg1} alt=''/>
                  </div>
                  <div className="col-sm-4">
                    <img src={discountImg2} alt=''/>
                  </div>
                  <div className="col-sm-4">
                    <img src={discountImg3} alt=''/>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Discount;
