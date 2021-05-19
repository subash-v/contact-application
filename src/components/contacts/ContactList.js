import React, { useState } from "react";
import ContactCard from "./ContactCard";
import styles from "./ContactList.module.scss";
import Header from "./Header";
export default function ContactList(props) {
  function compare_item(a, b) {
    if (a.name?.toLowerCase() < b.name?.toLowerCase()) {
      return -1;
    } else if (a.name?.toLowerCase() > b.name?.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  }
  const [searchValue, setsearchValue] = useState("");
  let contacts = props.contacts?.sort(compare_item);
  return (
    <div className={styles.base}>
      <Header
        history={props.history}
        searchValue={searchValue}
        handleSearch={(val) => setsearchValue(val)}
      />
      <div className={styles.content}>
        {contacts.map(
          (val) =>
            (val.name?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
              val.phoneNumber.includes(searchValue)) && (
              <div className={styles.cardHolder} key={val.id}>
                <ContactCard
                  data={val}
                  history={props.history}
                  handleEdit={props.addContact}
                  handleDeleteContact={props.handleDeleteContact}
                />
              </div>
            )
        )}
      </div>
      <div className={styles.addButton} onClick={() => props.addContact()} />
    </div>
  );
}
