import React from "react";
import coursesArray from "./CoursesArray.js";

let CourseExplContainer = props => {
  let activeItem;
  for (let i = 0; i < coursesArray.length; i++) {
    if (coursesArray[i].id === props.itemId) {
      activeItem = coursesArray[i];
    }
  }

  console.log("activeItem ", activeItem);

  let expId = 0;
  let explanationItems = activeItem.explanation.map(item => {
    expId++;
    return <p key={expId}>{item}</p>;
  });

  let explanationPoints = activeItem.points.map(point => {
    expId++;
    return (
      <li key={expId}>
        <i className="fa-li fa fa-check" />
        {point}
      </li>
    );
  });

  return (
    <div className="row justify-content-center">
      <div className="col-xl-4 col-md-6 d-none d-md-block">
        <div className="explanation-container">
          {explanationItems}
          <input
            className={"note-button button-lg"}
            type="button"
            value={"Записаться на курс"}
          />
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="explanation-container-points">
          <h5>Особенности курса</h5>
          <ul className="fa-ul">{explanationPoints}</ul>
          {/* For mobiles */}
          <input
            className={"note-button button-lg d-lg-none"}
            type="button"
            value={"Записаться на курс"}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseExplContainer;
