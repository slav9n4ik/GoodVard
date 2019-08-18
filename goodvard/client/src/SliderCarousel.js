import React from "react";
import Slider from "react-slick";
import arr from "./components/content/comments/CommentsArray.js"
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <Slider {...settings}>
        <div>
            <h2>{arr[0].name}</h2>
            <h4>{arr[0].expl}</h4>
            <img src={arr[0].src} alt=""/>
            <p>{arr[0].text}</p>               
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;