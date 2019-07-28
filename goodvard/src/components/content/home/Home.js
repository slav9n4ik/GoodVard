import React, { Component, Fragment } from "react";
import HomeItems from "./HomeItems.js"
import HomeItemsComp from "./HoneItemsComp.js";
import './home.css';

class Home extends Component {
  render() {

    let itemsComp = HomeItems.map(item => {
      return(
        <HomeItemsComp key={item.id} item={item}/>
      );
    })

    return (
      <Fragment>
        <div id="home">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              {itemsComp}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
          <input
            className="more-button phone-button d-lg-none"
            type="button"
            value={"Подробнее"}
          />         
      </Fragment>
    );
  }
}

export default Home;
