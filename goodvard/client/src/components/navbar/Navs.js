import React from "react";

let Navs = (props) => {

  let onClick = () => {
    props.clickHandler(props.id, props.href)
  };

  let isActive = false;
  if (props.activeId === props.id)
    isActive = true;
 
  return (
    <li className={`nav-item ${isActive ? "active" : ""}`}>
      <a className="nav-link" href={props.href} onClick={onClick}>
        {props.value}
      </a>
      <div className="hover" />
    </li>
  );
};

export default Navs;
