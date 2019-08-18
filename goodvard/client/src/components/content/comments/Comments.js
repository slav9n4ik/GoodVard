import React, { Component, Fragment } from "react";
import './comments.css';
import CommentItem from './CommentItem.js';
import commentsArray from './CommentsArray.js';

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
    </Fragment>
    );
  }
}

export default Comments;
