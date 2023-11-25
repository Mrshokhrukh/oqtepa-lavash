import { closeAuthModal, openVerifyModal } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ath from "./auth.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useLoginUserMutation } from "../../redux/authAPI";
import toast, { Toaster } from "react-hot-toast";
const AuthModal = () => {
  const [phone, setPhone] = useState("");
  const [loginUser, { isError, isSuccess, isLoading }] = useLoginUserMutation();
  const [name, setName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  let nameCheck = useRef(null);
  let phoneCheck = useRef(null);
  let isOpen = useSelector((state) => state.authModal.isOpenLogin);
  let dispatch = useDispatch();
  const phoneNumberRegex = /^\(\d{2}\) (\d{3})-(\d{2})-(\d{2})$/;
  const nameRegex = /^[a-zA-Z]{3,25}$/;

  const handleNameChange = (e) => {
    if (!nameRegex.test(name)) {
      nameCheck.current.className = `${ath.error}`;
    } else {
      nameCheck.current.className = ``;
    }
    setName(e.target.value);
  };
  useEffect(() => {
    if (nameRegex.test(name)) {
      nameCheck.current.className = ``;
    } else {
      setIsDisabled(true);
    }
    if (phoneNumberRegex.test(phone) && nameRegex.test(name)) {
      setIsDisabled(false);
    }
  }, [name]);

  const handlePhoneChange = (e) => {
    const inputWithoutNonDigits = e.target.value.replace(/\D/g, "");
    const formattedPhoneNumber = inputWithoutNonDigits.replace(
      /(\d{2})?(\d{3})?(\d{2})?(\d{2})?/,
      (_, g2, g3, g4, g5) => {
        let result = "";
        if (g2) result += `(${g2})`;
        if (g3) result += ` ${g3}`;
        if (g4) result += `-${g4}`;
        if (g5) result += `-${g5}`;
        return result;
      }
    );
    if (!phoneNumberRegex.test(phone)) {
      phoneCheck.current.className = `${ath.phone_input_div} ${ath.error}`;
    } else {
      phoneCheck.current.className = `${ath.phone_input_div}`;
    }
    if (formattedPhoneNumber.length < 15) {
      setPhone(formattedPhoneNumber);
    }
  };

  useEffect(() => {
    if (phoneNumberRegex.test(phone) && nameRegex.test(name)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    if (phoneNumberRegex.test(phone)) {
      phoneCheck.current.className = `${ath.phone_input_div}`;
    }
  }, [phone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transformedNumber = phone.replace(/\D/g, "");
    localStorage.setItem("phone", JSON.stringify(transformedNumber));

    let responseData = await loginUser({
      name: name,
      phone: transformedNumber,
    });

    console.log(responseData);

    if (responseData.data.code) {
      dispatch(closeAuthModal());
      dispatch(openVerifyModal());
      toast.success("tasdiqlash kodi yuborildi");
    }

    setName("");
    setPhone("");
  };

 

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
          <h2>Login</h2>
          <button
            onClick={() => dispatch(closeAuthModal())}
            className={ath.closeicon}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className={ath.modal_body}>
          <form onSubmit={handleSubmit}>
            <div className={ath.form_inputs}>
              <label htmlFor="name">your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Name"
                onChange={handleNameChange}
                ref={nameCheck}
              />
              <label htmlFor="phone">your phone number</label>
              <div className={ath.phone_input_div} ref={phoneCheck}>
                <span>+998</span>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="(__) ___ __ __"
                />
              </div>
            </div>
            <button disabled={isDisabled}>Confirm</button>
          </form>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
