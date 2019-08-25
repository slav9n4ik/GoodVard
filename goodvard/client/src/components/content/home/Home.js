import React, { Component, Fragment } from "react";
import HomeItems from "./HomeItems.js"
import HomeItemsComp from "./HoneItemsComp.js";
import './home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.noteButtonListener = this.noteButtonListener.bind(this);
  }

  noteButtonListener() {
    document.getElementById("courses").scrollIntoView({
          behavior: 'smooth',
          block: 'start'
    });
  }

  render() {

    let itemsComp = HomeItems.map(item => {
      return(
        <HomeItemsComp key={item.id} item={item}/>
      );
    })

    let itemCompLi = HomeItems.map(item => {
      if (item.id === 0) {
        return (
          <li key={0} data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        );
      } else {
        return(
          <li key={item.id} data-target="#carouselExampleIndicators" data-slide-to={item.id}></li>
        );
      }
    })

    return (
      <Fragment>
        <div id="home">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {itemCompLi}
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
            onClick={this.noteButtonListener}
          />         
      </Fragment>
    );
  }
}

export default Home;
