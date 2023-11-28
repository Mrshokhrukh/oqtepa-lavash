import React, { useEffect, useRef, useState } from "react";
import cat from "./cat.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePrAsync } from "../../redux/ProductSlice";

const Nav_catalogs = ({ getData }) => {
  const [selected, setSelect] = useState("Lavashlar");
  let myRef = useRef();
  let dispatch = useDispatch();

  const change = (data) => {
    dispatch(getSinglePrAsync(data.id));
    setSelect(data.name);
  };

  return (
    <div className={cat.catalog_items_box}>
      {getData.map((item, i) => {
        return (
          <div
            key={i}
            className={
              selected === item.name
                ? `${cat.cat_items} ${cat.active}`
                : cat.cat_items
            }
            onClick={() => change(item)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Nav_catalogs;
