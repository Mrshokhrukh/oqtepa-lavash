import { Link, NavLink, useNavigate } from "react-router-dom";
import nav from "./nav.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import { CgMenu } from "react-icons/cg";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { langs } from "../dropdowns/LangDropDown";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../../redux/sidebarSlice";
import { openAddressModal, openAuthModal } from "../../redux/authSlice";
import { SlUserFollowing } from "react-icons/sl";
import { regions as regionsData } from "../dropdowns/LangDropDown";

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
  const [searchValue, setSearchValue] = useState("");
  let Localreg = JSON.parse(localStorage.getItem("region"));
  const [selectedReg, setReg] = useState(Localreg || regionsData[0]);
  let isLogin = useSelector((state) => state.authModal.isLoggedIn);

  const [selectedLang, setLang] = useState(
    JSON.parse(localStorage.getItem("lang")) || langs[0]
  );

  useEffect(() => {
    langs.find((lang) => {
      if (lang.short === selectedLang.short) {
        lang.isSelected = true;
        lang.id = 1;
      } else {
        lang.id = 0;
        lang.isSelected = false;
      }
    });

    regionsData.find((reg) => {
      if (reg.name === selectedReg.name) {
        reg.isSelected = true;
        reg.id = 1;
      } else {
        reg.id = 0;
        reg.isSelected = false;
      }
    });
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

  const changeRegion = (name) => {
    regionsData?.find((reg) => {
      if (reg.name === name) {
        reg.isSelected = true;
        reg.id = 1;
        localStorage.setItem("region", JSON.stringify(reg));
        let getReg = JSON.parse(localStorage.getItem("region"));
        setReg(getReg);
      } else {
        reg.id = 0;
        reg.isSelected = false;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
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

              <div
                className={delivery}
                onClick={() => dispatch(openAddressModal())}
              >
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
                  <span className={regions_location}>{selectedReg.name}</span>
                </div>

                <div
                  className={
                    isOpenReg
                      ? `${nav.openRegionSelector_box} ${nav.open}`
                      : `${nav.openRegionSelector_box}`
                  }
                >
                  <ul className={nav.select_region}>
                    {regionsData
                      .sort((a, b) => b.id - a.id)
                      .map((opt, i) => {
                        return (
                          <div key={i}>
                            <li
                              className={opt.isSelected ? nav.selectedOpt : ""}
                              onClick={() => changeRegion(opt.name)}
                            >
                              {opt.name}
                            </li>
                          </div>
                        );
                      })}

                    {/* <li
                      className={nav.selectedOpt}
                      onClick={() => changeRegion("tashkent")}
                    >
                      Toshkent
                    </li>
                    <li onClick={() => changeRegion("nukus")}>Nukus</li>
                    <li onClick={() => changeRegion("namangan")}>Namangan</li>
                    <li onClick={() => changeRegion("kokand")}>Qo'qon</li>
                    <li onClick={() => changeRegion("samarqand")}>Samarqand</li>
                    <li onClick={() => changeRegion("andijon")}>Andijon</li>
                    <li onClick={() => changeRegion("fergana")}>Farg'ona</li>
                    <li onClick={() => changeRegion("gazalkent")}>Farg'ona</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className={bottom_search}>
              <form onSubmit={handleSubmit}>
                <p className={search_icon}>
                  <ion-icon name="search-outline"></ion-icon>
                </p>
                <input
                  type="text"
                  placeholder="Cheesy tandory lavash..."
                  value={searchValue || ""}
                  onChange={handleChange}
                />
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
              {isLogin ? (
                <Link to="/user/profile" className={nav.user}>
                  <SlUserFollowing />
                </Link>
              ) : (
                <div
                  className={login}
                  onClick={() => dispatch(openAuthModal())}
                >
                  <button>Login</button>
                </div>
              )}
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
