import React from "react";
import { Fragment } from "react";

let ResultItemEmpty = props => {

    let style = {
        display: "block",
        width: "100px",
        height: "100px"
    }

  return (
    <div className="col-12">
      <div className="container-fluid results-container">
        <Fragment>
          <div className="row justify-content-center">
            <div className="col-12 my-auto">
              <p>{props.text}</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
                <div style={style}/>
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default ResultItemEmpty;
