import { NavLink, useNavigate } from "react-router-dom";
import nav from "./nav.module.scss";
import logoImg from "../../assets/logo_2.0.svg";
import { HiLocationMarker } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";

import uzb from "../../assets/Flag_of_Uzbekistan.svg.png";
import rus from "../../assets/Flag_of_Russia.svg.png";
import eng from "../../assets/Flag_of_Great_Britain_(English_version).png";
import { langs } from "../dropdowns/LangDropDown";
import Nav_catalogs from "../nav_catalogs/Nav_catalogs";

const {
  navbar,
  logo,
  elements,
  top_links,
  delivery,
  lang_icon,
  icon,
  delivery_links,
  regions,
  regions_title,
  regions_location,
  lang_title,
  language,
  login,
  start_order,
  search_field,
  search_icon,
  bottom_search,
  nav_links,
} = nav;

const Navbar = () => {
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);
  const [selectedLang, setLang] = useState({
    lang: "English",
    short: "EN",
    url: eng,
    isSelected: false,
    id: 1,
  });
  const [selectedReg, setReg] = useState("tashkent");

  let navigate = useNavigate();

  const openSelector = (val) => {
    if (val == "lang") {
      setIsOpenLang(!isOpenLang);
      setIsOpenReg(false);
    } else {
      setIsOpenReg(!isOpenReg);
      setIsOpenLang(false);
    }
  };

  const changeLanguage = (param) => {
    langs.find((lang) => {
      if (lang.short === param) {
        lang.isSelected = true;
        lang.id = 1;
        setLang(lang);
      } else {
        lang.id = 0;
        lang.isSelected = false;
      }
    });
  };

  return (
    <>
      <nav className={`${navbar} ${nav.container}`}>
        <div className={logo}>
          <img
            src="https://oqtepalavash.uz/assets/images/logo_2.0.svg"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>

        <div className={elements}>
          <div className={nav.center}>
            <div className={top_links}>
              <NavLink to="/">Menu</NavLink>

              <NavLink to="/">About us</NavLink>

              <NavLink to="/">Branches</NavLink>

              <NavLink to="/">Contacts</NavLink>

              <div className={delivery}>
                <div className={nav.delivery_icon}>
                  <HiLocationMarker />
                </div>
                <div className={delivery_links}>
                  <span>delivery or takeaway</span>
                  <span>select the type of reception</span>
                </div>
              </div>

              <div className={regions} onClick={() => openSelector("reg")}>
                <div className={nav.regions_icon}>
                  <img
                    src="https://oqtepalavash.uz/assets/images/regionIcon.svg"
                    alt=""
                  />
                </div>
                <div className={nav.region_links}>
                  <span className={regions_title}>regions</span>
                  <span className={regions_location}>{selectedReg}</span>
                </div>

                <div
                  className={
                    isOpenReg
                      ? `${nav.openRegionSelector_box} ${nav.open}`
                      : `${nav.openRegionSelector_box}`
                  }
                >
                  <ul className={nav.select_region}>
                    <li className={nav.selectedOpt}>Toshkent</li>
                    <li onClick={() => setReg("nukus")}>Nukus</li>
                    <li onClick={() => setReg("namangan")}>Namangan</li>
                    <li onClick={() => setReg("qo'qon")}>Qo'qon</li>
                    <li onClick={() => setReg("samarqand")}>Samarqand</li>
                    <li onClick={() => setReg("andijon")}>Andijon</li>
                    <li onClick={() => setReg("farg'ona")}>Farg'ona</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={bottom_search}>
              <form>
                <p className={search_icon}>
                  <ion-icon name="search-outline"></ion-icon>
                </p>
                <input type="text" placeholder="Cheesy tandory lavash..." />
              </form>
            </div>
          </div>

          <div className={nav.right}>
            <div className={nav.right_top}>
              <div className={language} onClick={() => openSelector("lang")}>
                <span className={lang_icon}>
                  <img src={selectedLang.url} alt="" />
                </span>
                <div className={lang_title}>{selectedLang.short}</div>
                <div className={nav.select_icon}>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </div>

                <div
                  className={
                    isOpenLang
                      ? `${nav.openLangSelector_box} ${nav.open}`
                      : `${nav.openLangSelector_box}`
                  }
                >
                  <ul className={nav.select_language}>
                    {langs
                      .sort((a, b) => b.id - a.id)
                      .map((opt, i) => {
                        return (
                          <div key={i}>
                            <li
                              className={opt.isSelected ? nav.selectedOpt : ""}
                              onClick={() => changeLanguage(opt.short)}
                            >
                              <img src={opt.url} alt="" /> {opt.lang}
                            </li>
                          </div>
                        );
                      })}
                  </ul>
                </div>
              </div>

              <div className={login}>
                <button>Login</button>
              </div>
            </div>
            <div className={start_order}>
              <button>Start order</button>
            </div>
          </div>
        </div>
      </nav>

      <div className={nav.nav_elements_show_in_responsive}>
        <Nav_catalogs />
      </div>
    </>
  );
};

export default Navbar;
