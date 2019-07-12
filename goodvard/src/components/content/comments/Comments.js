import React, { Component, Fragment } from "react";

class Comments extends Component {

  render() {
    let style = {
      "backgroundColor": "yellow",
      "width": "100%",
      "height": "600px"
    };
    return (
      <Fragment>
        <div id="comments" style={style}>
          <h1>Comments</h1>
        </div>
      </Fragment>
    );
  }
}

export default Comments;
