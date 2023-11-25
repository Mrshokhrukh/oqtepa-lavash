import { closeAddressModal } from "../../redux/authSlice";
import map from "./location.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import GoogleWrapper from "./GoogleWrapper";

const MapLocationsModal = () => {
  const [categ, setCateg] = useState(1);
  let dispatch = useDispatch();
  let isOpen = useSelector((state) => state.authModal.isAddressModalOpen);
  const handleClick = (num) => {
    setCateg(num);
  };
  return (
    <div
      className={
        isOpen
          ? `${map.map_modal_background} ${map.open}`
          : `${map.map_modal_background} `
      }
    >
      <div className={map.modal_container}>
        <div className={map.modal_wrapper}>
          <div className={map.modal_header}>
            <div>
              <h2>Qabul qilish turini tanlang</h2>
              <span>
                Menyularni real vaqtda va joylashuv bo'yicha ko'rish uchun
              </span>
            </div>
            <button
              onClick={() => dispatch(closeAddressModal())}
              className={map.closeicon}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className={map.map_modal_left}>
            <div className={map.left_categories}>
              <div
                className={
                  categ === 1
                    ? `${map.category} ${map.active}`
                    : `${map.category} ${map.delivery}`
                }
                onClick={() => handleClick(1)}
              >
                Yetkazib berish
              </div>
              <div
                className={
                  categ === 2
                    ? `${map.category} ${map.active}`
                    : `${map.category} ${map.delivery}`
                }
                onClick={() => handleClick(2)}
              >
                Olib kelish
              </div>
            </div>
            <div className={map.enter_address_input}>
              <input type="text" placeholder="Manzilni kiriting" />

              <span className={map.clear_icon}>
                <AiOutlineClose />
              </span>
            </div>
            {categ === 1 ? (
              <div className={`${map.data_field} ${map.field_delivery}`}>
                <div className={`${map.address}`}>
                  <p className={map.address_name}>Tashkent</p>
                  <p className={map.address_target}>tashkent</p>
                </div>
              </div>
            ) : (
              <div className={`${map.data_field} ${map.field_pickup}`}>
                <div className={`${map.address}`}>
                  <p className={map.address_name}>2 Tashkent</p>
                  <p className={map.address_target}> 2tashkent</p>
                </div>
              </div>
            )}

            <button className={map.confirm_loc_btn} disabled>
              Manzilni tasdiqlash
            </button>
          </div>
          <div className={map.map_modal_right}>
            <GoogleWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLocationsModal;
