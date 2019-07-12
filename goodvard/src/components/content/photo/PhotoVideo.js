import React, { Component, Fragment } from "react";

class PhotoVideo extends Component {

  render() {
    let style = {
      "backgroundColor": "yellow",
      "width": "100%",
      "height": "600px"
    };
    return (
      <Fragment>
        <div id="photo" style={style}>
          <h1>PhotoVideo</h1>
        </div>
      </Fragment>
    );
  }
}

export default PhotoVideo;
