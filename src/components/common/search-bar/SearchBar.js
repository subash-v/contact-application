import React from "react";
import styles from "./SearchBar.module.scss";
import SearchInput from "./SearchInput";

export default function SearchBar(props) {
  return (
    <div className={styles.base}>
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon} />
        <SearchInput
          placeholder="Search"
          value={props.searchValue}
          onChange={(val) => props.handleSearch(val)}
        />
      </div>
    </div>
  );
}
