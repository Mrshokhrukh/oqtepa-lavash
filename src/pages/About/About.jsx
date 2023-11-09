import React from "react";
import ab from "./about.module.scss";
const About = () => {
  return (
    <div className={ab.page_container}>
      <h1 className={ab.page_title}>Kompaniya haqida</h1>

      <div className={ab.about}>
        <img src="https://oqtepalavash.uz/assets/images/about.jpg" alt="" />
        <div className={ab.description}>
          <p>
            “Oqtepa lavash” fastfud kafelar tarmog‘i O‘zbekistonning jadal
            rivojlanayotgan bozorida faoliyat yuritib, aholi o‘rtasida arzon tez
            tayyorlanadigan taomlarga bo‘lgan talabni qondirishga qaratilgan.
          </p>

          <br />
          <p>
            Menyuga pita nonining yanada muvozanatli variantlarini qo'shishdan
            tortib, faqat buyurtma qilingan holda tayyorlanadigan yangi
            cheeseburgerlarni taqdim etishgacha bo'lgan taomimizga
            ishtiyoqmandmiz. Biz har doim mijozlarimizga va oziq-ovqatimizga
            sodiqligimizni ko'rsatish yo'llarini topamiz.
          </p>

          <br />
          <p>
            Bizning hikoyamiz 12 yildan ko'proq vaqt oldin, ikki aka-uka
            o'zlarining eski orzularini ro'yobga chiqarish, ovqatlanish
            sohasida, ya'ni lavash pishirishda eng yaxshi bo'lishni
            boshlaganlarida boshlangan. Xullas, 2010 yilda Oqtepa lavashining
            birinchi filiali paydo bo‘ldi. Bugungi kunga qadar O‘zbekiston
            bo‘ylab 55 dan ortiq tez ovqatlanish kafelari ochilib, 1500 dan
            ortiq xodim ish bilan ta’minlangan.
          </p>

          <br />
          <p>
            Bosh ofisimiz manzili: Toshkent sh., Olmazor tumani, Qorasaroy
            ko'chasi 2a
          </p>
        </div>
      </div>

      <div className={ab.space_bottom}></div>
    </div>
  );
};

export default About;
