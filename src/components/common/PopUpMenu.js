import React from "react";
import FadeInOut from "./FadeInOut";
import styles from "./PopUpMenu.module.scss";
export default function PopUpMenu(props) {
  return (
    <FadeInOut
      delay={300}
      isMounted={props.isMounted}
      styleClass={styles.base}
      timingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      transformOrigin={props.transformOrigin}
    >
      {props.children}
    </FadeInOut>
  );
}
