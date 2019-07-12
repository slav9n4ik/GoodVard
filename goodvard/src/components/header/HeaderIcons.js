import React, { Fragment } from "react";

let HeaderIcons = () => {
  return (
    <Fragment>
      <ul className="ul-icons">
        <li>
          <a href="https://vk.com/goodvard">
            <i className="fab fa-vk social-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_goodvard/?hl=ru">
            <i className="fab fa-instagram social-icon inst-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCKNHkLr2lUDWNPfcLdbrYog">
            <i className="fab fa-youtube social-icon" />
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default HeaderIcons;
