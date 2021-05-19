import React from "react";
import styles from "./Button.module.scss";

export default function Button(props) {
  const styleName = props.type
    ? styles[`${props.loading ? styles["-loading"] : props.type}`]
    : props.loading
    ? styles.primaryLoading
    : styles.primary;
  return (
    <div
      className={styleName}
      style={{
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        opacity: props.disable && "0.5",
        background: props.color,
      }}
      onClick={!props.loading && !props.disable && props.onClick}
      id={props.id}
    >
      {props.children}
      {/* <div styleName="loader"></div> */}
    </div>
  );
}
