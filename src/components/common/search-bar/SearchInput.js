import { useState } from "react";
import styles from "./SearchInput.module.scss";


export default function SearchInput(props) {
  const [focused, handleFocus] = useState(false);
  const [value, setValue] = useState(props.value);
  const active = focused || props.value || props.value === 0;
  const handleChange = (val) => {
    if (props.onChange) {
      props.onChange(val.target.value);
      setValue(val.target.value);
    }
  };
  const handleBlur = (bool) => {
    if (props.onBlur) {
      props.onBlur();
    }
    handleFocus(bool);
  };
  const handleFocusfunction = (bool) => {
    if (props.onFocus) {
      props.onFocus();
    }
    handleFocus(bool);
  };
  const onKeyUp = (key) => {
    if (props.onKeyUp) {
      props.onKeyUp(key);
    }
  };
  return (
    <div className={styles.base}>
      <input
        className={styles.inputActual}
        value={props.value || value || ""}
        type={props.type}
        disabled={props.disabled}
        onBlur={() => handleBlur(false)}
        onFocus={() => handleFocusfunction(true)}
        onKeyUp={(event) => onKeyUp(event.key)}
        onChange={handleChange}
        autoFocus={props.autoFocus}
        maxLength={props.maxlength}
        min={props.min}
        max={props.max}
        style={{
          backgroundColor: props.backgroundColor,
          ...props.inputStyles,
        }}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
