import React, { useEffect, useRef, useState } from "react";
import ath from "./auth.module.scss";
import ver from "./verify.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeVerifyModal, login, setAccessToken } from "../../redux/authSlice";
import { AiOutlineClose } from "react-icons/ai";
import { useVerifyUserMutation } from "../../redux/authAPI";
import toast, { Toaster } from "react-hot-toast";
const Verify = () => {
  const [code, setCode] = useState();
  const [disable, setDisable] = useState(true);
  let isOpen = useSelector((state) => state.authModal.isOpenVerify);
  let dispatch = useDispatch();
  const inputRefs = useRef();
  let navigate = useNavigate();
  const [timer, setTimer] = useState(60);
  const [verifyUser, { isError, isSuccess, isLoading }] =
    useVerifyUserMutation();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let getPhoneFromStorage = JSON.parse(localStorage.getItem("phone"));

    let postData = await verifyUser({
      phone: getPhoneFromStorage,
      code: code,
    });

    if (postData.error) {
      let error = postData.error.data.non_field_errors[0];
      toast.error(error);
    } else {
      toast.success("Successfully login");
      localStorage.setItem("token", JSON.stringify(postData.data.access));
      dispatch(setAccessToken(`${postData.data.access}`));
      dispatch(closeVerifyModal());
      navigate("/user/profile");
      window.location.reload();
      setCode("");
    }
  };

  useEffect(() => {
    inputRefs.current.focus();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div
      className={
        isOpen
          ? `${ath.auth_modal_background} ${ath.open}`
          : `${ath.auth_modal_background}`
      }
    >
      <Toaster position="top-center" reverseOrder={false} />
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
              {timer < 1 ? (
                <p className={ver.req_again} onClick={() => setTimer(60)}>
                  Request code again
                </p>
              ) : (
                <p>{timer}s</p>
              )}
            </div>
            <button disabled={disable}>login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
