import React, { Component, Fragment } from "react";

class Discount extends Component {

  render() {
    let style = {
      "backgroundColor": "orange",
      "width": "100%",
      "height": "600px"
    };
    return (
      <Fragment>
        <div id="discount" style={style}>
          <h1>Discount</h1>
        </div>
      </Fragment>
    );
  }
}

export default Discount;
