import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import './results.css';
import ResultItem from "./ResultItem.js";
import resultArray from './resultsArray.js';
import ResultItemEmpty from './ResultItemEmpty.js';

class Results extends Component {

  render() {
    const { inViewport, innerRef } = this.props;

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

    let ResultComps = resultArray.map(item => {
      return(
        <ResultItem key={item.id} text={item.text} src={item.src}/>
      );
    });

    let getEmptyComp = () => {
      return(
        <ResultItemEmpty key={0} text={"Матвейка, 7 лет, занимается в Goodvard с 2017 года." +
            "Помимо навыков чтения, говорения и письма, имеет очень хороший словарный запас для своего возраста."+ 
            "На видео продемонстрирован фрагмент мини-зачета, который проводится у каждого раз в 3 месяца."}/>
      );
    }

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
        <div id="results" className="container-fluid" ref={innerRef}>
          <div className="row justify-content-center">
            <div className="col-sm-12 header-container">
              <p>Наши результаты</p>
            </div>
          </div>
          <Slider {...settings}>
            {inViewport ? ResultComps : getEmptyComp}
          </Slider>
        </div>
      </Fragment>
    );
  }
}

export default Results;
