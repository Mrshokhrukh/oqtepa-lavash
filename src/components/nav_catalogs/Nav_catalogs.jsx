import React, { useEffect, useRef, useState } from "react";
import cat from "./cat.module.scss";

const Nav_catalogs = ({ getData }) => {
  const [selected, setSelect] = useState("lavash");
  let myRef = useRef();

  return (
    <div className={cat.catalog_items_box} ref={myRef}>
      {getData.map((item, i) => {
        return (
          <div key={i} className={cat.cat_items}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Nav_catalogs;
