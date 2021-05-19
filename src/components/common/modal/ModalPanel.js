import React from "react";
import { ModalControl } from "./ModalRoot";
import styles from "./ModalPanel.module.scss";
import { withRouter } from "react-router-dom";
class ModalPanel extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <ModalControl>
          {(modal) => (
            <div
              className={styles.panel}
              onClick={() => {
                if (this.props.onClose) {
                  this.props.onClose();
                }
                modal.closeModal();
              }}
            ></div>
          )}
        </ModalControl>
        {this.props.type === "noWindow" ? (
          this.props.children
        ) : (
          <div
            className={styles.window}
            style={{
              maxHeight: this.props.maxHeight,
              overflow: this.props.overflow,
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(ModalPanel);
