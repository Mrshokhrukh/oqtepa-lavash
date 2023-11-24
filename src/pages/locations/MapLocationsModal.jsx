import { closeAddressModal } from "../../redux/authSlice";
import map from "./location.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
const MapLocationsModal = () => {
  let dispatch = useDispatch();
  let isOpen = useSelector((state) => state.authModal.isAddressModalOpen);

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
            <h2>modal</h2>
            <button
              onClick={() => dispatch(closeAddressModal())}
              className={map.closeicon}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MapLocationsModal;
