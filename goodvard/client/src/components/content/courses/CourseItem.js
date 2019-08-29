import React from "react";

let CourseItem = props => {

  let active = props.isActive ? " active" : "";
  let clickOnContainer = () => {
    let id = props.item.id;
    props.clickOnContainerHandler(id);
  }

  return (
    <div className="col-xl-3 col-md-3">
      <div className={"item-container" + active} onClick={clickOnContainer}>
        <h5>{props.item.title}</h5>
        <p>{props.item.years}</p>
        <img className="d-none d-md-block" src={props.item.src} alt="" />
      </div>
    </div>
  );
};

export default CourseItem;
