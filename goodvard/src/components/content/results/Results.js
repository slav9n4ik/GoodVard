import React, { Component, Fragment } from "react";
import './results.css';
import ResultItem from "./ResultItem.js";
import resultArray from './resultsArray.js';

class Results extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { inViewport, innerRef } = this.props;

    let ResultComps = resultArray.map(item => {
      return(
        <ResultItem key={item.id} text={item.text} src={item.src}/>
      );
    });

    let columnsArr = [];
    let rowArr = [];
    for (let i = 0; i < ResultComps.length; i++) {
      columnsArr.push(ResultComps[i]);
      if (columnsArr.length === 2) {
        rowArr.push(columnsArr);
        columnsArr = [];
      }
    }

    let id = 0;
    let ResultCompsRows = rowArr.map(item => {
      id++;
      return(
        <div key={id} className="row justify-content-center">
            {item}
        </div>
      );
    });

    return (
      <Fragment>
        <div id="results" className="container-fluid" ref={innerRef}>
          <div className="row justify-content-center">
            <div className="col-sm-12 header-container">
              <p>Наши результаты</p>
            </div>
          </div>
          {inViewport ? ResultCompsRows : ""}
        </div>
      </Fragment>
    );
  }
}

export default Results;
