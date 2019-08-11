import React, { Component, Fragment } from "react";
import './contacts.css';
import contactImg from "./../../../img/bg-contact.jpg";
import { YMaps, Map, Placemark} from 'react-yandex-maps';

class Contacts extends Component {

  render() {
    const mapState = { 
      center: [55.60105316368484,38.086919431213325], 
      zoom: 16,
      controls: ['zoomControl'] 
    };
    const mapModules = [
      'control.ZoomControl'
    ]
    
    const placeMark = {
        geometry: [55.60105316368484,38.086919431213325]
    }
    return (
      <Fragment>
      <div id="contacts" className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12 contacts-header">
            <p>Контакты</p>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-12">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-5 col-12 m-3">
                <YMaps>
                  <Map state={mapState} modules={mapModules} className="map-container">
                      <Placemark {...placeMark}/>
                  </Map>
                </YMaps>
                </div>
                <div className="col-xl-3 col-lg-5  m-3">
                  <div className="row">
                    <div className="col-12 address-container">
                      <h2>Адрес</h2>
                      <p>г. Жуковский, ул Гудкова, д16 
                        (вход слева от Дикси)</p>
                      <h2>График</h2>
                      <p>Пн-Пт: 9:00 - 20:00</p>
                      <p>Сб-Вс: Выходной</p>
                      <p>+7(964)784-99-36</p>
                      <p>What'sUp/Telegram/Viber</p>
                      <p>(В любое время)</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 photo-address-container">
                      <img src={contactImg} alt=""/>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 m-3 contacts-item-container">
                  <p>Запись</p>
                  <div className="container-fluid">
                    <div className="row justify-content-center form-container">
                      <div className="col-6">
                        <label>
                          Имя:
                          <input
                            type='text'
                          />
                        </label>
                      </div>
                      <div className="col-6">
                        <label>
                          Телефон:
                          <input
                            type='text'
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row justify-content-center form-container">
                      <div className="col-12">
                        <label>
                          Email:
                          <input
                            type='text'
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row justify-content-center form-container">
                      <div className="col-12">
                        <label>
                          Сообщение:
                          <textarea
                            type='text'
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-12 checkbox-class">
                        <label htmlFor="form-checkbox" className="container">
                          <input type="checkbox" id="form-checkbox"/>
                          <span className="checkmark"></span>
                            Нажимая кнопку, я принимаю условия Пользовательского
                            соглашения и даю своё согласие на обработку моих персональ-
                            ных данных, в соответствии с Федеральным законом от
                            27.07.2006 года No152-ФЗ «О персональных данных».
                        </label>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-12 btn-container">
                        <input
                          className="note-button"
                          type="button"
                          value="Отправить"
                        />
                      </div>
                    </div>
                  </div>
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