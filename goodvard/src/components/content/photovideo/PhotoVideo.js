import React, { Component, Fragment } from "react";
import "./photovideo.css";
import photoArray from "./photoArray.js";
import videoArray from "./VideoArray.js";
import ImageGallery from 'react-image-gallery';

class PhotoVideo extends Component {

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
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PhotoVideo;
