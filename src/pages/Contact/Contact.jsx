import React from "react";
import con from "./contact.module.scss";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
  return (
    <div className={con.page_container}>
      <h1 className={con.contacts_page_title}>Contacts</h1>
      <div className={con.contact_page}>
        <div className={con._img_qr_cont}>
          <img
            src="https://oqtepalavash.uz/assets/images/contacts_img.jpg"
            alt=""
            className={con.buy_img}
          />
          <div className={con.qr_code}>
            <img
              src="https://oqtepalavash.uz/assets/images/qr_oqtepa_contact.png"
              alt=""
            />
            <p>
              Izoh qoldiring yoki <br /> telegramda savol bering
            </p>

            <a href="https://t.me/Oqtepalavash_TM" target="_blank">
              @Oqtepalavash_TM
            </a>
          </div>
        </div>
        <div className={con.contacts_info}>
          <a href="tel:+998781500030">
            Yagona aloqa markazi <br /> <span>+998 78 150 00 30</span>
          </a>
          <br />
          <br />
          <a href="https://t.me/oqtepalavash_bot" target="_blank">
            Telegram bot <br /> <span>t.me/oqtepalavash_bot</span>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
