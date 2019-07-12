import React from 'react';
import LogoBee from "./../../icons/bee-logo .svg";
import GoodvardLogo from "./../../icons/goodvard.svg";
import "./../../css/header-large.css";
import HeaderIcons from "./HeaderIcons.js";

let BigHeader = () => {
    return(
        <div className="container-fluid d-none d-lg-block">
          <div
            id="large-header"
            className="row header-bg d-flex align-items-center"
          >
            <div className="col-lg-4 d-flex align-items-center justify-content-start">
              <img
                src={LogoBee}
                className="logo"
                width="auto"
                height="105px"
                alt="logo-bee"
              />
              <img
                src={GoodvardLogo}
                className="logo"
                width="auto"
                height="70px"
                alt="logo-text"
              />
            </div>
            <div className="col-lg-3 offset-5">
              <div className="row d-flex align-items-center">
                <div className="col-10 d-flex justify-content-end">
                  <div className="header-phone-block">
                    <p className="phone-number">+7(964)784-99-36</p>
                    <input
                      className={"note-button"}
                      type="button"
                      value={"Записаться на бесплатное занятие"}
                    />
                  </div>
                </div>
                <div className="col-2 d-flex justify-content-start">
                  <HeaderIcons />
                </div>
              </div>
            </div>
          </div>         
        </div>
    );
}

export default BigHeader;