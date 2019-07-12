import React, { Component, Fragment } from "react";

class About extends Component {

  render() {
    let style = {
      "backgroundColor": "orange",
      "width": "100%",
      "height": "600px"
    };
    return (
      <Fragment>
        <div id="about" style={style}>
          <h1>About</h1>
        </div>
      </Fragment>
    );
  }
}

export default About;
