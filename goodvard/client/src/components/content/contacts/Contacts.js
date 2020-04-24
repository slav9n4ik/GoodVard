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
      isHideAlertSuccess: true,
      isHideAlertError: true,
      isDisable: true
    };
    this.sendMailHandler = this.sendMailHandler.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
  }

  sendMailHandler() {
    console.log("Send mail from client");
    let requestData ={
      name: this.state.clientName,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.text
    };

    fetch('/api/sendEmail', 
    { method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ 
        data: requestData
      }) 
    })
      .then(result => 
        result.text()
        .then(result => {
          if (result === 'success') {
            console.log(result)
            this.setState({
              isHideAlertSuccess: false
            });
          } else {
            this.setState({
              isHideAlertError: false
            });
          }
        }))
        .catch( err => {
          console.log("Send Error: ", err);
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
      [name]: value
    });
  }

  render() {
    return (
      <Fragment>
      <div id="contacts" className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12 contacts-header header-container">
            <p>Контакты</p>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-12">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-4 col-12">
                  <Map/>
                </div>
                <AddressBlock/>
                <div className="col-xl-4 col-lg-4 ">
                  <div className="container-fluid contacts-item-container">
                    <div className="row justify-content-center">
                      <p>Запись</p>
                    </div>
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
                    <div className="alert alert-success alert-dismissible fade show" hidden={this.state.isHideAlertSuccess}>
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Отправлено!</strong> Сообщение было успешно отправлено!
                      </div>
                      <div className="alert alert-danger alert-dismissible fade show" hidden={this.state.isHideAlertError}>
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Ошибка!</strong> Сообщение не было отправлено! Повторите попытку!
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

//2) Валидация
//3) Логика отправки
    //a) Отправить самому себе сообщение с формы 
    //в) Пуш ап об успешной отправке 