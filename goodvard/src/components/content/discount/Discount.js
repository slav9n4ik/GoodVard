import React, { Component, Fragment } from "react";
import "./discount.css";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import jquery from 'jquery';
import $ from 'jquery';

import discountImg1 from "../../../img/discount1.png";
import discountImg2 from "../../../img/discount3.png";
import discountImg3 from "../../../img/discount3.png";

class Discount extends Component {
  render() {
    const options = {
      items: 1,
      nav: true,
      rewind: true,
      autoplay: true
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
            <div className="col-xl-7 col-12">
              <div className="container-fluid discount-container">
                <div className="row justify-content-center">
                  {/* <div className="col-sm-4">
                    <img src={discountImg1} alt=''/>
                  </div>
                  <div className="col-sm-4">
                    <img src={discountImg2} alt=''/>
                  </div>
                  <div className="col-sm-4">
                    <img src={discountImg3} alt=''/>
                  </div> */}
                  <OwlCarousel
                      className="owl-theme"
                      loop
                      margin={10}
                      nav
                  >
                      <div class="item"><h4>1</h4></div>
                      <div class="item"><h4>2</h4></div>
                      <div class="item"><h4>3</h4></div>
                      <div class="item"><h4>4</h4></div>
                      <div class="item"><h4>5</h4></div>
                      <div class="item"><h4>6</h4></div>
                      <div class="item"><h4>7</h4></div>
                      <div class="item"><h4>8</h4></div>
                      <div class="item"><h4>9</h4></div>
                      <div class="item"><h4>10</h4></div>
                      <div class="item"><h4>11</h4></div>
                      <div class="item"><h4>12</h4></div>
                  </OwlCarousel>
                  
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
