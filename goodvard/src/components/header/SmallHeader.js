import React, { Component, Fragment } from "react";
import "./header-small.css";
import LogoBee from "../../icons/bee-logo .svg";
import HeaderIconsSmall from "./HeaderIconsSmall.js";

class SmallHeader extends Component {

  noteButtonListener() {
    console.log("Click SmallHeader")
    document.getElementById("contacts").scrollIntoView({
          behavior: 'smooth',
          block: 'start'
    });
  }

  render() {
    return (
      <Fragment>
        <div className='container-fluid d-none d-lg-block'>
          <div id='small-header' className="row small-header-bg d-flex align-items-center">
            <div className="col-lg-3 d-flex align-items-center justify-content-start">
              <img
                src={LogoBee}
                className="logo-bee-small"
                width="auto"
                height="40px"
                alt="logo-bee-small"
              />
              <div className="line-small-header" />
              <p className="phone-number-small">+7(964)784-99-36</p>
            </div>
            <div className="col-lg-4 offset-5 d-flex align-items-center justify-content-end">
              <HeaderIconsSmall />
              <div className="line-small-header" />
              <input
                className="note-button-small"
                type="button"
                value={"Записаться на бесплатное занятие"}
                onClick={this.noteButtonListener}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SmallHeader;
