import React, { useState } from "react";
import styles from "./Input.module.scss";

export default function Input(props) {
  const [focused, handleFocus] = useState(false);
  const active = focused || props.value;
  const handleChange = (val) => props.onChange(val.target.value);
  const onFocus = () => {
    if (props.onFocus) {
      props.onFocus();
    }
    handleFocus(true);
  };
  const onBlur = () => {
    if (props.onBlur) {
      props.onBlur();
    }
    handleFocus(false);
  };
  return (
    <div
      className={
        active
          ? props.hollow
            ? styles.baseHollow
            : styles.baseActive
          : props.hollow
          ? styles.baseHollow
          : styles.base
      }
      style={{ border: props.border }}
    >
      <div className={styles.content}>
        <input
          type={!active ? "text" : props.type}
          className={styles.inputActual}
          id={props.id}
          value={props.value || ""}
          onBlur={() => onBlur()}
          onFocus={() => onFocus()}
          onChange={handleChange}
          disabled={props.disabled}
          placeholder={props.normalplaceholder}
        ></input>
   
        <div className={active ? styles.placeholderActive : styles.placeholder}>
          <div className={styles.placeholderText}>{props.placeholder}</div>
        </div>
        {props.error && <div className={styles.errorHelp}>{props.error}</div>}
      </div>
    </div>
  );
}
