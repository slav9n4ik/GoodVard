import React,{Fragment} from "react";

let AdvantageItem = props => {
  return (
    <Fragment>
      <div className="advantage-bg pt-1">
        <div className="adv-icon-container">
          <img src={props.src} alt="" />
        </div>
        <div className="explanation-container mt-2">
          <h3>{props.title}</h3>
          <p>{props.explanation}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default AdvantageItem;
