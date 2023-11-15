import React, { useEffect, useRef, useState } from "react";
import ath from "./auth.module.scss";
import ver from "./verify.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeVerifyModal } from "../../redux/authSlice";
import { AiOutlineClose } from "react-icons/ai";
const Verify = () => {
  const [code, setCode] = useState();
  const [disable, setDisable] = useState(true);
  let isOpen = useSelector((state) => state.authModal.isOpenVerify);
  let dispatch = useDispatch();
  const inputRefs = useRef();

  let submitBtn = /^[0-9]{4}$/;
  const handleChange = (e) => {
    const validValue = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCode(validValue);

    if (submitBtn.test(validValue)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  useEffect(() => {
    inputRefs.current.focus();
  }, []);

  return (
    <div
      className={
        isOpen
          ? `${ath.auth_modal_background} ${ath.open}`
          : `${ath.auth_modal_background}`
      }
    >
      <div className={ath.auth_modal}>
        <div className={ath.modal_header}>
          <h2>Verification</h2>
          <button
            onClick={() => dispatch(closeVerifyModal())}
            className={ath.closeicon}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className={ath.modal_body}>
          <form onSubmit={handleSubmit}>
            <div className={ver.otp_verification_box}>
              <p className={ver.title}>Enter SMS verification code</p>
              <div className={ver.otp_code_field}>
                <input
                  type="number"
                  maxLength={4}
                  pattern="\d*"
                  value={code || ""}
                  className={ver.code}
                  placeholder="••••"
                  onChange={handleChange}
                  ref={inputRefs}
                />

                {/* <div className={ver.code}></div>
                <div className={ver.code}>•</div>
                <div className={ver.code}>•</div> */}
              </div>
              <p className={ver.req_again}>Request code again</p>
            </div>
            <button disabled={disable}>login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
