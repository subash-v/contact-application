import React from "react";
import { ModalControl } from "./ModalRoot";
import styles from "./ModalLeftPanel.module.scss";
import { withRouter } from "react-router-dom";

 class ModalLeftPanel extends React.Component {
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
        <div className={styles.window}>{this.props.children}</div>
      </div>
    );
  }
}
export default withRouter(ModalLeftPanel);