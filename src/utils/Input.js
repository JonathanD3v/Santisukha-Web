import React, { useState } from "react";
import classes from "../assets/css/Input.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = ({
  icon,
  type,
  label,
  value,
  event,
  error,
  placeholder = "",
  otp_event,
}) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  if (type === "password") {
    return (
      <div className={classes["input-group"]}>
        <label htmlFor={label} className={classes["input-label"]}>
          {label}
        </label>
        <div className={classes["input-container"]}>
          <span className={classes["input-icon"]}>{icon}</span>
          <input
            type={toggleIcon ? "text" : "password"}
            value={value}
            onChange={event}
            className={`${classes["input-box"]} text-sm py-3`}
            style={{ paddingRight: "30px" }}
            placeholder={placeholder}
          />
          <button
            className={classes["password-toggle-icon"]}
            type="button"
            onClick={() => setToggleIcon(!toggleIcon)}
          >
            {toggleIcon ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        {error && <span className={classes["error-message"]}>{error}</span>}
      </div>
    );
  } else {
    return (
      <div className={classes["input-group"]}>
        <label htmlFor={label} className={classes["input-label"]}>
          {label}
        </label>
        <div className={`${classes["input-container"]} flex max-h-[40px]`}>
          <span className={classes["input-icon"]}>{icon}</span>
          <input
            type={type}
            className={`${classes["input-box"]} text-sm py-3 ${
              otp_event && "rounded-r-none"
            }`}
            value={value}
            onChange={event}
            style={{ paddingRight: "8px" }}
            placeholder={placeholder}
          />
          {otp_event && (
            <button
              type="button"
              className="bg-green-700 text-sm p-2 text-white font-semibold rounded-md pt-[10px] px-5 whitespace-nowrap rounded-l-none"
              onClick={otp_event}
            >
              GET OTP
            </button>
          )}
        </div>
        {error && <span className={classes["error-message"]}>{error}</span>}
      </div>
    );
  }
};

export default Input;
