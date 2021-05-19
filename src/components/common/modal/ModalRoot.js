import React from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("modal-root");
const ModalContext = React.createContext();
export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modal: null,
    };
  }
  onBackButtonEvent = (e) => {
    e.preventDefault();
    this.closeModal();
  };

  componentDidMount() {
    window.onpopstate = this.onBackButtonEvent;
  }
  openModal = (modal) => {
    this.setState({ modal, modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modal: null, modalOpen: true });
  };
  render() {
    return (
      <ModalContext.Provider
        value={{
          ...this.state,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}
export class ModalPanel extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <ModalContext.Consumer>
        {(context) => (context.modalOpen ? context.modal : null)}
      </ModalContext.Consumer>,
      this.el
    );
  }
}

export class ModalControl extends React.Component {
  render() {
    return (
      <ModalContext.Consumer>
        {(context) => {
          return this.props.children(context);
        }}
      </ModalContext.Consumer>
    );
  }
}
