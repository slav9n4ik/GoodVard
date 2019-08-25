import React from "react";
import { Fragment } from "react";

let ResultItem = props => {
  // let w = window.innerWidth;
  // let component;
  // if (w >= 768) {
  //   component = (
  //     <div className="row justify-content-center">
  //       <div className="col-6 my-auto">
  //         <p>{props.text}</p>
  //       </div>
  //       <div className="col-6">
  //         <video controls src={props.src} />
  //       </div>
  //     </div>
  //   );
  // } else {
  //   component = (
  //     <Fragment>
  //       <div className="row justify-content-center">
  //         <div className="col-12 my-auto">
  //           <p>{props.text}</p>
  //         </div>
  //       </div>
  //       <div className="row justify-content-center">
  //         <div className="col-12">
  //           <video controls src={props.src} />
  //         </div>
  //       </div>
  //     </Fragment>
  //   );
  // }

  return (
    // <div className="col-xl-6 col-12">
    <div className="col-12">
      <div className="container-fluid results-container">
        {/* {component} */}
        <Fragment>
          <div className="row justify-content-center">
            <div className="col-12 my-auto">
              <p>{props.text}</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <video controls src={props.src} />
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default ResultItem;
