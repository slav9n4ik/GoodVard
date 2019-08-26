import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import './results.css';
import ResultItem from "./ResultItem.js";
import resultArray from './resultsArray.js';

class Results extends Component {

  render() {
    //const { inViewport, innerRef } = this.props;

    var settings = {
      dots: true,
      swipeToSlide: true,
      //arrows: false,
      infinite: true,
      //autoplay: true,
      speed: 500,
      // autoplaySpeed: 5000,
      // cssEase: "linear",
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

    // let columnsArr = [];
    // let rowArr = [];
    // for (let i = 0; i < ResultComps.length; i++) {
    //   columnsArr.push(ResultComps[i]);
    //   if (columnsArr.length === 2) {
    //     rowArr.push(columnsArr);
    //     columnsArr = [];
    //   }
    // }

    // let id = 0;
    // let ResultCompsRows = rowArr.map(item => {
    //   id++;
    //   return(
    //     <div key={id} className="row justify-content-center">
    //         {item}
    //     </div>
    //   );
    // });

    return (
      <Fragment>
        {/* <div id="results" className="container-fluid" ref={innerRef}> */}
        <div id="results" className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 header-container">
              <p>Наши результаты</p>
            </div>
          </div>
          <Slider {...settings}>
            {ResultComps}
            {/* {inViewport ? ResultComps : ""} */}
          </Slider>
        </div>
      </Fragment>
    );
  }
}

export default Results;
