import React, { Component, Fragment } from "react";
import AdvantagesArray from "./AdvantagesArray.js";
import AdvantageItem from "./AdvantageItem.js";
import "./advantages.css";

class Advantages extends Component {

  render() {
    let AdvantageComps = AdvantagesArray.map(item => {
        return(
            <AdvantageItem 
                key={item.id} 
                title={item.title}
                explanation={item.explanation}
                src={item.src}
            />
        );
    });

    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {AdvantageComps}
          </div>
          <div className="row justify-content-center video-btn-container">
            <a  href="https://www.instagram.com/_goodvard/" 
                className={"note-button video-button"}
                >
              Примеры видеоотчетов
            </a>
            {/* <input
              className={"note-button video-button"}
              type="button"
              value={"Примеры видеоотчетов"}
              onClick={this.buttonHandler}
            /> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Advantages;
