import React from 'react';

let AdvantageItem = (props) => {
    return(
        <div className="col-md-4 advantage-bg">
              <div className="adv-icon-container">
                <img src={props.src} alt="" />
              </div>
              <div className="explanation-container mt-2">
                <h3>{props.title}</h3>
                <p>{props.explanation}</p>
              </div>
            </div>
    );
}

export default AdvantageItem;