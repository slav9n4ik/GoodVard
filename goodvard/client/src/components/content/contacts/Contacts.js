import React, { Component, Fragment } from "react";
import './contacts.css';
import Map from "./MapComponent.js";
import AddressBlock from "./AddressBlock.js";

class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state ={
      clientName: "",
      email: "",
      phone: "",
      text: "",
      isDisable: true
    }
    this.sendMailHandler = this.sendMailHandler.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
  }

  sendMailHandler() {
    console.log("Send mail from client")
    fetch('/api/sendEmail').then(response => {
      response.json()
      .then(data => {
          console.log(data)
      })
      .catch( err => {
          console.log("Send Error: ", err);
      });
    });
  }

  checkboxHandler() {
    this.setState({
      isDisable: !this.state.isDisable
    });
  }

  formHandler(event) {
    let {name, value} = event.target;
    this.setState({
      [name]: [value]
    });
  }

  render() {
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
                  <Map/>
                </div>
                <AddressBlock/>
                <div className="col-xl-3 col-lg-5 m-3 contacts-item-container">
                  <p>Запись</p>
                  <div className="container-fluid">
                    <div className="row justify-content-center form-container">
                      <div className="col-6">
                        <label>Имя:
                          <input
                            type='text'
                            name="clientName"
                            onChange={this.formHandler}
                          />
                        </label>
                      </div>
                      <div className="col-6">
                        <label>Телефон:
                          <input
                            type='text'
                            name="phone"
                            onChange={this.formHandler}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row justify-content-center form-container">
                      <div className="col-12">
                        <label>Email:
                          <input
                            type='text'
                            name="email"
                            onChange={this.formHandler}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row justify-content-center form-container">
                      <div className="col-12">
                        <label>Сообщение:
                          <textarea
                            type='text'
                            name="text"
                            onChange={this.formHandler}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-12 checkbox-class">
                        <label htmlFor="form-checkbox" className="container">
                          <input 
                            type="checkbox" 
                            id="form-checkbox"
                            onClick={this.checkboxHandler}
                            />
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
                        <p hidden={!this.state.isDisable}>
                          Нажмите на кнопку выше, чтобы дать
                          согласие на обработку персональных данных.
                        </p>
                        <input
                          className="note-button"
                          type="button"
                          value="Отправить"
                          hidden={this.state.isDisable}
                          onClick={this.sendMailHandler}
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

//1) Стили
//2) Валидация
//3) Логика отправки
    //a) Отправить самому себе сообщение с формы 
    //б) Отправить пользователю сообщение об успешной доставке 
    //в) Пуш ап об успешной отправке 