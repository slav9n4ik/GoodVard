import React from "react";
import contactImg from "./../../../img/bg-contact.jpg";

let AddressBlock = () => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="row">
        <div className="col-12">
          <div className="address-container">
            <h2>Адрес</h2>
            <p>г. Жуковский, ул Гудкова, д16 (вход слева от Дикси)</p>
            <h2>График</h2>
            <p>Пн-Пт: 9:00 - 20:00</p>
            <p>Сб-Вс: Выходной</p>
            <p>+7(964)784-99-36</p>
            <p>What'sUp/Telegram/Viber</p>
            <p>(В любое время)</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 photo-address-container">
          <img src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddressBlock;
