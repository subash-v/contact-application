import React from "react";
import styles from "./ContextPopup.module.scss";
import DropDownBase from "./DropDownBase";
import PopUpMenu from "./PopUpMenu";

export default function PopOutBox(props) {
  const Icon = props.icon;
  return (
    <DropDownBase
      toggleOverlay={() => console.log("")}
      render={(data) => (
        <div
          className={styles.base}
          style={{
            width: props.width ? props.width : props.size,
            height: props.height ? props.height : props.size,
          }}
          onClick={data.handleDropDown}
        >
          {Icon ? (
            Icon(data.handleDropDown)
          ) : (
            <div className={styles.button} onClick={data.handleDropDown}></div>
          )}
          <div
            className={
              data.distanceToBottom < 200 && data.distanceToTop > 200
                ? styles.popDown
                : styles.popup
            }
            style={{ left: props.left }}
          >
            <PopUpMenu
              isMounted={data.dropDownVisible}
              transformOrigin={
                data.distanceToBottom < 200 && data.distanceToTop > 200
                  ? "bottom right"
                  : "top right"
              }
            >
              {props.options &&
                props.options.map((item) => {
                  if (item) {
                    return (
                      <div
                        key={item.value}
                        className={styles.item}
                        onClick={(e) => {
                          e.stopPropagation();
                          props.onSubmit(item.value);
                          data.handleDropDown();
                        }}
                      >
                        {item.label}
                      </div>
                    );
                  }
                })}
            </PopUpMenu>
          </div>
        </div>
      )}
    ></DropDownBase>
  );
}
