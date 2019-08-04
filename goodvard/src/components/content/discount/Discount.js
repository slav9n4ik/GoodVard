import React, { Component, Fragment } from "react";
import "./discount.css";

import discountImg1 from "../../../img/discount1.png";
import discountImg2 from "../../../img/discount2.png";
import discountImg3 from "../../../img/discount3.png";

class Discount extends Component {
  render() {

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
                  <div className="col-sm-4 d-none d-md-block">
                    <img src={discountImg1} alt=''/>
                  </div>
                  <div className="col-sm-4 d-none d-md-block">
                    <img src={discountImg2} alt=''/>
                  </div>
                  <div className="col-sm-4 d-none d-md-block">
                    <img src={discountImg3} alt=''/>
                  </div>

                  <div id="carouselExampleControls" class="carousel slide d-md-none" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={discountImg1} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src={discountImg2} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src={discountImg3} class="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>

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
