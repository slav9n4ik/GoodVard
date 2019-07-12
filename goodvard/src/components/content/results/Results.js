import React, { Component, Fragment } from "react";

class Results extends Component {

  render() {
    let style = {
      "backgroundColor": "orange",
      "width": "100%",
      "height": "600px"
    };
    return (
      <Fragment>
        <div id="results" style={style}>
          <h1>Results</h1>
        </div>
      </Fragment>
    );
  }
}

export default Results;
