import React, { Component, Fragment } from "react";
import "./discount.css";
import discountArray from "./discountArray.js";
import DiscountCarusel from "./DiscountCarusel.js";

class Discount extends Component {
  render() {

    let id = 0;
    let imgComps = discountArray.map(item => {
      id++;
      return(
        <div key={id} className="col-sm-4 d-none d-md-block">
          <img src={item} alt=''/>
        </div>
      );
    });

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
                  {imgComps}
                  {/* For mobiles */}
                  <DiscountCarusel/>
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
