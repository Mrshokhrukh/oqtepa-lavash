import { TfiWorld } from "react-icons/tfi";
import { BiChevronDown } from "react-icons/bi";
import { langs, regions } from "../dropdowns/LangDropDown";
import { useRef, useState } from "react";
import sid from "./sidebar.module.scss";
const Selections = () => {
  let regRef = useRef();
  const [selectedLang, setLang] = useState(langs[0]);
  const [selectedReg, setReg] = useState(regions[0]);

  const [isOpenLang, setIsOpenLang] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);

  const changeLanguage = (param) => {
    setIsOpenLang(!isOpenLang);
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

  const changeRegion = (name) => {
    setIsOpenReg(!isOpenReg);
    regRef.current.scrollTo(0, 0);

    regions.find((reg) => {
      if (reg.name === name) {
        reg.isSelected = true;
        reg.id = 1;
        setReg(reg);
      } else {
        reg.id = 0;
        reg.isSelected = false;
      }
    });
  };

  return (
    <>
      <div
        className={
          isOpenLang ? `${sid.selection} ${sid.open}` : `${sid.selection}`
        }
        onClick={() => setIsOpenLang(!isOpenLang)}
      >
        <div className={sid.element}>
          <div className={sid.icon}>
            <img src={selectedLang.url} alt="" />
          </div>
          <div className={sid.text}>{selectedLang.lang}</div>
          <div className={sid.sel_icon}>
            <BiChevronDown />
          </div>
        </div>
        <div className={sid.select_wrapper}>
          <ul className={sid.select_options}>
            {langs
              .sort((a, b) => b.id - a.id)
              .map((opt, i) => {
                return (
                  <div key={i}>
                    <li
                      className={opt.isSelected ? sid.selectedOpt : ""}
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

      <div
        className={
          isOpenReg ? `${sid.selection} ${sid.open}` : `${sid.selection}`
        }
        onClick={() => setIsOpenReg(!isOpenReg)}
      >
        <div className={sid.element}>
          <div className={sid.icon}>
            <TfiWorld />
          </div>
          <div className={sid.text}>{selectedReg.name}</div>
          <div className={sid.sel_icon}>
            <BiChevronDown />
          </div>
        </div>
        <div className={sid.select_wrapper}>
          <ul className={sid.select_options} ref={regRef}>
            {regions
              .sort((a, b) => b.id - a.id)
              .map((opt, i) => {
                return (
                  <div key={i}>
                    <li
                      className={opt.isSelected ? sid.selectedOpt : ""}
                      onClick={() => changeRegion(opt.name)}
                    >
                      {opt.name}
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Selections;
