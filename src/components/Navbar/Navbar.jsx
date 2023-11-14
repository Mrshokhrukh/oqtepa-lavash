import { NavLink, useNavigate } from "react-router-dom";
import nav from "./nav.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import { CgMenu } from "react-icons/cg";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { langs } from "../dropdowns/LangDropDown";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../../redux/sidebarSlice";
import { openAuthModal } from "../../redux/authSlice";

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
  const [selectedReg, setReg] = useState("tashkent");
  const [selectedLang, setLang] = useState(
    JSON.parse(localStorage.getItem("lang")) || langs[0]
  );

  useEffect(() => {
    const getLang = () => {
      langs.find((lang) => {
        if (lang.short === selectedLang.short) {
          lang.isSelected = true;
          lang.id = 1;
        } else {
          lang.id = 0;
          lang.isSelected = false;
        }
      });
    };
    getLang();
  }, []);

  let navigate = useNavigate();
  let dispatch = useDispatch();

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
        localStorage.setItem("lang", JSON.stringify(lang));
        setLang(JSON.parse(localStorage.getItem("lang")));
      } else {
        lang.id = 0;
        lang.isSelected = false;
      }
    });
  };
  let isOpenSidebar = useSelector((state) => state.sidebar.isOpen);

  return (
    <div>
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

              <NavLink to="/about">About us</NavLink>

              <NavLink to="/branches">Branches</NavLink>

              <NavLink to="/contact">Contacts</NavLink>

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
                <ion-icon name="chevron-down-outline"></ion-icon>{" "}
                <div className={nav.select_icon}></div>
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

              <div className={login} onClick={() => dispatch(openAuthModal())}>
                <button>Login</button>
              </div>
            </div>
            <div className={start_order}>
              <button>Start order</button>
            </div>
          </div>
        </div>

        <div className={nav.responsive_right_nav}>
          {isOpenSidebar ? (
            <div
              className={nav.close_icon}
              onClick={() => dispatch(closeSidebar())}
            >
              <IoClose />
            </div>
          ) : (
            <>
              <div className={nav.delivery_icon}>
                <HiLocationMarker />
              </div>
              <div
                className={nav.burger_icon}
                onClick={() => dispatch(openSidebar())}
              >
                <CgMenu />
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
