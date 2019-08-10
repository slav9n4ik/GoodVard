import React, { Component, Fragment } from "react";
import './contacts.css';
import { YMaps, Map, Placemark} from 'react-yandex-maps';

class Contacts extends Component {

  render() {

    const mapState = { center: [55.76, 37.64], zoom: 10 };

    return (
      <Fragment>
      <div id="contacts" className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12 contacts-header">
            <p>Контакты</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-4 contacts-item-container">
                {/* <YMaps>
                    <Map state={mapState}>
                
                    </Map>
                </YMaps> */}
                <script type="text/javascript" charSet="utf-8" async 
                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abd46988088b195622147acbb9e9f65a4e59de8b6f684729543c032b0d8db026d&amp;width=310&amp;height=400&amp;lang=ru_RU&amp;scroll=true">
                </script>
                </div>
                <div className="col-4">
                  <div className="row">
                    <div className="col-12 address-container">
                      <p>address</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 photo-address-container">
                      <p>photo</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 contacts-item-container">
                  <p>form</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </Fragment>
    );
  }
}

export default Contacts;