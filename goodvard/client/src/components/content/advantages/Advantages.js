import React, { Component, Fragment } from "react";
import AdvantagesArray from "./AdvantagesArray.js";
import AdvantageItem from "./AdvantageItem.js";
import Slider from "react-slick";
import "./advantages.css";

class Advantages extends Component {

  render() {

    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      swipeToSlide: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      slidesToShow: 4,
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
            slidesToScroll: 2,
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

    let AdvantageComps = AdvantagesArray.map(item => {
        return(
            <AdvantageItem 
                key={item.id} 
                title={item.title}
                explanation={item.explanation}
                src={item.src}
            />
        );
    });

    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11">
              <Slider {...settings}>
                {AdvantageComps}
              </Slider>
            </div>
          </div>
          <div className="row justify-content-center video-btn-container">
            <a  href="https://www.instagram.com/_goodvard/" 
                className={"note-button video-button"}
                >
              Примеры видеоотчетов
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Advantages;
