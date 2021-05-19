import React from "react";
import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.base}>
      <div className={styles.loader} />
    </div>
  );
}
Loader.defaultProps = {
  display: true,
};
