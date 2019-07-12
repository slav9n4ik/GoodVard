import React, { Fragment } from "react";

let HeaderIconsSmall = () => {
  return (
    <Fragment>
      <div className="icons-small d-flex">
        <li>
          <a href="https://vk.com/goodvard">
            <i className="fab fa-vk social-icon inline-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_goodvard/?hl=ru">
            <i className="fab fa-instagram social-icon inline-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCKNHkLr2lUDWNPfcLdbrYog">
            <i className="fab fa-youtube social-icon inline-icon"/>
          </a>
        </li>
      </div>
    </Fragment>
  );
};

export default HeaderIconsSmall;
