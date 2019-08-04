import React from "react";
import discountArray from "./discountArray.js";

let DiscountCarusel = () => {

    let id = 0;
    let imgComps = discountArray.map(item => {
      id++;
      return(
        <div key={id} class="carousel-item active">
            <img src={item} class="d-block w-100" alt="..." />
        </div>
      );
    });

  return (
    <div
      id="carouselExampleControls"
      class="carousel slide d-md-none"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        {imgComps}
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default DiscountCarusel;
