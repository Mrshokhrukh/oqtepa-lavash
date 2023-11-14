import React, { useEffect, useRef, useState } from "react";
import ath from "./auth.module.scss";
import ver from "./verify.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeVerifyModal } from "../../redux/authSlice";
import { AiOutlineClose } from "react-icons/ai";
const Verify = () => {
  let numberOfDigits = 4;
  const [code, setCode] = useState(Array(numberOfDigits).fill(""));
  let isOpen = useSelector((state) => state.authModal.isOpenVerify);
  let dispatch = useDispatch();
  const inputRefs = useRef([]);
  const handleChange = (index, value) => {
    let check = /^[0-9]$/;

    if (check.test(value)) {
      const newOtp = [...code];
      newOtp[index] = value;
      setCode(newOtp);

      if (value !== "" && index < numberOfDigits - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

 

  useEffect(() => {
    inputRefs.current[0].focus();
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
          <form>
            <div className={ver.otp_verification_box}>
              <p className={ver.title}>Enter SMS verification code</p>
              <div className={ver.otp_code_field}>
                {code.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    className={ver.code}
                    placeholder="•"
                    onChange={(e) => handleChange(index, e.target.value, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={(input) => (inputRefs.current[index] = input)}
                  />
                ))}
                {/* <div className={ver.code}></div>
                <div className={ver.code}>•</div>
                <div className={ver.code}>•</div> */}
              </div>
              <p className={ver.req_again}>Request code again</p>
            </div>
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
