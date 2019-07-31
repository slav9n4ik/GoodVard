import React, { Fragment } from "react";
import "./home.css";
import "./kidsimg.css";
import "./mainimg.css";
import "./preschoolimg.css";
import "./schoolimg.css";
import "./campimg.css";

let HomeItemsComp = props => {

  let activeClass = props.item.id === 0 ? " active" : "";

  let imgClass;
  let imgClassBg;

  switch(props.item.id) {
      case 0 : 
        imgClassBg = "imgMainBg";
        imgClass = "mainImg"
        break;
      case 1 :
        imgClassBg = "imgKidsBg";
        imgClass = "kidsImg"
        break;
      case 2 :
        imgClassBg = "preschoolImgBg";
        imgClass = "preschoolImg"
        break;
      case 3 :
        imgClassBg = "schoolImgBg";
        imgClass = "schoolImg"
        break;
      case 4 :
        imgClassBg = "campImgBg";
        imgClass = "campImg"
        break;
      default:
        console.log("default")
  }
  return (
    <Fragment>
      <div className={"carousel-item" + activeClass}>
        <img src={props.item.srcBg} className={imgClassBg} alt={props.item.id} />
        <div className="explanation-bg">
          <h3>{props.item.title}</h3>
          <p>{props.item.explanation}</p>
          <input
            id="more-button"
            className="more-button"
            type="button"
            value={"Подробнее"}
          />
        </div>
        <div className={imgClass}>
          <img
            src={props.item.src}
            className="img-fluid d-block w-100"
            alt={props.item.id}
          />
        </div>
        <div className="blackout" />
      </div>
    </Fragment>
  );
};

export default HomeItemsComp;
