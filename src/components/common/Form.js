import React from "react";
const FormContext = React.createContext();
export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateForm = val => {
    this.setState({ ...val });
  };
  clearState = () => {
    let dummyState = this.state;
    for (let property in dummyState) {
      let encodedKey = encodeURIComponent(property);
      delete this.state[encodedKey];
    }
  };
  onSubmit = () => {
    this.props.onSubmit({ ...this.state });
  };
  componentDidMount() {
    if (this.props.initialValues) {
      this.updateForm(this.props.initialValues);
    }
  }

  render() {
    return (
      <FormContext.Provider
        value={{
          ...this.state,
          updateForm: this.updateForm,
          onSubmit: this.onSubmit,
          clearState: this.clearState
        }}
      >
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

export class FormElement extends React.Component {
  render() {
    return (
      <FormContext.Consumer>
        {context => this.props.children(context)}
      </FormContext.Consumer>
    );
  }
}
