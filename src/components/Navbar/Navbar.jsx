import { NavLink } from "react-router-dom";
import nav from "./nav.module.scss";
import logoImg from "../../assets/logo_2.0.svg";
import { HiLocationMarker } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

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
  return (
    <nav className={navbar}>
      <div className={logo}>
        <img src="https://oqtepalavash.uz/assets/images/logo_2.0.svg" alt="" />
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

            <div className={regions}>
              <div className={nav.regions_icon}>
                {/* <MdLanguage /> */}
                <img
                  src="https://oqtepalavash.uz/assets/images/regionIcon.svg"
                  alt=""
                />
              </div>
              <div className={nav.region_links}>
                <span className={regions_title}>regions</span>
                <span className={regions_location}>Tashkent</span>
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
            <div className={language}>
              <span className={lang_icon}></span>
              <div className={lang_title}>UZ</div>
              <div className={nav.select_icon}>
                <ion-icon name="chevron-down-outline"></ion-icon>
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
  );
};

export default Navbar;
