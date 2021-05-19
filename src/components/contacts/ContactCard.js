import React from "react";
import styles from "./ContactCard.module.scss";
import ContextPopup from "../common/ContextPopup";
export default function ContactCard(props) {
  let data = props.data;
  const options = [
    {
      value: "edit",
      label: "Edit Contact",
    },
    {
      value: "delete",
      label: "Delete Contact",
    },
  ];
  const handleMenu = (option) => {
    switch (option) {
      case "edit": {
        props.handleEdit(data);
        break;
      }
      case "delete": {
        props.handleDeleteContact(data.id);
        break;
      }
      default:
        return null;
    }
  };
  return (
    <div className={styles.base}>
      <div className={styles.iconHolder}>
        <div className={styles.callerIcon} />
      </div>
      <div
        className={styles.cardDetails}
        onClick={() => props.history.push(`/${data.id}`)}
      >
        <div className={styles.heading}>{data?.name}</div>
        <div className={styles.subHeading}>{data?.phoneNumber}</div>
      </div>
      <div className={styles.iconPosition}>
        <ContextPopup
          size={20}
          icon={(f) => <div className={styles.moreIcon} onClick={f}></div>}
          onSubmit={(val) => {
            handleMenu(val);
          }}
          options={options}
        />
      </div>
    </div>
  );
}
