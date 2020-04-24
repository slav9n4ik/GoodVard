import React, { Component, Fragment } from "react";
import "./photovideo.css";
import photoArray from "./photoArray.js";
import ImageGallery from 'react-image-gallery';

class PhotoVideo extends Component {

  getGallery() {
    return(
      <ImageGallery 
        items={photoArray}
        showPlayButton={false}
        lazyLoad={true}
      />
    );
  }

  render() {
    return (
      <Fragment>
        <div id="photo" className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 header-container">
              <p>Альбом</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              <div className="container-fluid photo-container">
                <ImageGallery 
                    items={photoArray}
                    showPlayButton={false}
                    lazyLoad={true}
                  />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-8 button-container">
              <a  href="https://www.instagram.com/_goodvard/" 
                className={"note-button button-lg"}
                >
                Больше фото и видео
              </a> 
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PhotoVideo;
