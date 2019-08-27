import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import './results.css';
import ResultItem from "./ResultItem.js";
import resultArray from './resultsArray.js';

class Results extends Component {

  render() {

    var settings = {
      dots: true,
      swipeToSlide: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
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

    let ResultComps = resultArray.map(item => {
      return(
        <ResultItem key={item.id} text={item.text} src={item.src}/>
      );
    });

    return (
      <Fragment>
        <div id="results" className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 header-container">
              <p>Наши результаты</p>
            </div>
          </div>
          <Slider {...settings}>
            {ResultComps}
          </Slider>
        </div>
      </Fragment>
    );
  }
}

export default Results;
