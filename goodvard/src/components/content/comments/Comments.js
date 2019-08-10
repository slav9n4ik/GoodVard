import React, { Component, Fragment } from "react";
import './comments.css';
import CommentItem from './CommentItem.js';
import commentsArray from './CommentsArray.js';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

class Comments extends Component {  
  render() {    
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

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
      className: "sample"
    };

    return (
      <Fragment>
      <div id="comments" className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12 comments-container">
            <p>Отзывы</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="container-fluid">
              <div className="row justify-content-center">
                  {commentsComp} 
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* <div className= "comments-container-item">
      <Slider {...settings}>
                    <div >
                        <h2>{commentsArray[0].name}</h2>
                        <h4>{commentsArray[0].expl}</h4>
                        <img src={commentsArray[0].src} alt=""/>
                        <p>{commentsArray[0].text}</p>               
                    </div>
                  </Slider>
      </div> */}
    </Fragment>
    );
  }
}

export default Comments;
