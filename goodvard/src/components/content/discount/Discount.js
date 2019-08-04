import React, { Component, Fragment } from "react";
import "./discount.css";

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
