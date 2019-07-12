import React, { Component, Fragment } from "react";

class Courses extends Component {
  render() {
    let style = {
      "backgroundColor": "yellow",
      "width": "100%",
      "height": "600px"
    };
    return (
      <Fragment>
        <div id="cources" style={style}>
          <h1>Courses</h1>
        </div>
      </Fragment>
    );
  }
}

export default Courses;
