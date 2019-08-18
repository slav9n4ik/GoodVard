import React from "react";
import discountArray from "./discountArray.js";

let DiscountCarusel = () => {

    let id = 0;
    let imgComps = discountArray.map(item => {
      id++;
      return(
        <div key={id} className="carousel-item active">
            <img src={item} className="d-block w-100" alt="..." />
        </div>
      );
    });

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide d-md-none"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {imgComps}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default DiscountCarusel;
