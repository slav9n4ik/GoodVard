import React, { Component, Fragment } from "react";
import './results.css';

class Results extends Component {

  render() {
    return (
      <Fragment>
        <div id="results" className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 header-container">
              <p>Наши результаты</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              <div className="container-fluid results-container">
                
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Results;
