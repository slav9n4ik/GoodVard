import React, { Component, Fragment } from "react";
import './home.css';
import $ from 'jquery';
import campImgBg from "../../../img/camp-baner-bg.png";
import mainImgBg from "../../../img/explanation-photo.png";
import mainImg from "../../../img/explanation-photo-back.jpg";
import kidsImgBg from "../../../img/kids-baner-bg.png";
import preschoolImgBg from "../../../img/preschool-baner-bg.png";
import schoolImgBg from "../../../img/shool-baner-bg.png";

class Home extends Component {
  render() {
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
              <div className="carousel-item active">
                  <img src={mainImgBg} className="imgMainBg" alt="1"/>
                  <div className="explanation-bg">
                    <h3>Защита детей от скучного английского</h3>
                    <p>Ваш ребенок полюбит наш английский</p>
                    <input
                      id="more-button"
                      className="more-button"
                      type="button"
                      value={"Подробнее"}
                    />
                  </div>
                  <div className="blackout"/>
                <div className="mainImg">
                  <img src={mainImg} className="img-fluid d-block w-100" alt="1"/>
                </div>
              </div>
              <div className="carousel-item">
                <img src={campImgBg} className="d-block w-100" alt="2"/>
              </div>
              <div className="carousel-item">
                <img src={kidsImgBg} className="d-block w-100" alt="3"/>
              </div>
              <div className="carousel-item">
                <img src={preschoolImgBg} className="d-block w-100" alt="4"/>
              </div>
              <div className="carousel-item">
                <img src={schoolImgBg} className="d-block w-100" alt="5"/>
              </div>
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
