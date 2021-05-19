import React from "react";
import SearchBar from "../common/search-bar/SearchBar";
import styles from "./Header.module.scss";
export default function Header(props) {
  return (
    <div className={styles.base}>
      <div className={styles.iconHolder}>
        <div
          className={styles[props.icon ? props.icon : "setting"]}
          onClick={props.handleIcon}
        ></div>
      </div>
      <div className={styles.headingText}>
        {props.title ? props.title : "Contacts"}
      </div>
      {!props.hideSearch && (
        <div className={styles.searchHolder}>
          <SearchBar
            searchValue={props.searchValue}
            handleSearch={(val) => props.handleSearch(val)}
          />
        </div>
      )}
    </div>
  );
}
