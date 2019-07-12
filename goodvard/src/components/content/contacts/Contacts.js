import React, { Component, Fragment } from "react";

class Contacts extends Component {

  render() {
    let style = {
      "backgroundColor": "orange",
      "width": "100%",
      "height": "600px"
    };
    return (
      <Fragment>
        <div id="contacts" style={style}>
          <h1>Contacts</h1>
        </div>
      </Fragment>
    );
  }
}

export default Contacts;
