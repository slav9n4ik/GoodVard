import React, { Component, Fragment } from "react";
import './comments.css';
import Slider from "react-slick";
import CommentItem from './CommentItem.js';
import commentsArray from './CommentsArray.js';

class Comments extends Component {  
  render() {
    let settings = {
      dots: true,
      swipeToSlide: true,
      infinite: true,
      speed: 1500,
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

    let commentsComp = commentsArray.map(item => {
      return(
        <CommentItem 
          key={item.id}
          name={item.name}
          expl={item.expl}
          src={item.src}
          text={item.text}
          textMore={item.textMore}
        />
      );
    });

    return (
      <Fragment>
      <div id="comments" className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12 comments-container header-container">
            <p>Отзывы</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
              <Slider {...settings}>
                {commentsComp}
              </Slider>
          </div>
        </div>
      </div> 
    </Fragment>
    );
  }
}

export default Comments;
