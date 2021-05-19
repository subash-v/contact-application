import React, { useState } from "react";
import Header from "../contacts/Header";
import styles from "./AddContactModal.module.scss";
import { Form, FormElement } from "../common/Form";
import Button from "../common/Button";
import Input from "../common/Input";
import { checkEmptyObject, validateEmpty } from "../../utils/validation";
export default function AddContactModal(ownProps) {
  const [errors, seterrors] = useState({});
  const [seterror, seterrorFlag] = useState(false);
  let errorMessages = {
    name: "Please Enter Name",
    phoneNumber: "Please Enter Phone No",
  };
  const validateField = (value, validator) => {
    return validator(value);
  };
  const validate = (val) => {
    if (!validateField(val.name, validateEmpty)) {
      const error = Object.assign(errors, { name: true });
      seterrors(error);
    } else {
      const error = Object.assign(errors, { name: false });
      delete error.name;
      seterrors(error);
    }
    if (!validateField(val.phoneNumber, validateEmpty)) {
      const error = Object.assign(errors, { phoneNumber: true });
      seterrors(error);
    } else {
      const error = Object.assign(errors, { phoneNumber: false });
      delete error.phoneNumber;
      seterrors(error);
    }

    seterrorFlag(!seterror);
  };
  const handleClose = () => {
    if (ownProps.closeModal) {
      ownProps.closeModal();
    }
  };
  const handleSubmit = (val) => {
    validate(val);
    if (checkEmptyObject(errors)) {
      let jsonObj = {
        id: ownProps?.initialValues?.id ? ownProps.initialValues.id : Date.now(),
        name: val.name,
        phoneNumber: val.phoneNumber,
        emailAdress: val.emailAdress,
        favourite: val?.favourite ? val?.favourite : false,
      };
      if (ownProps.onSubmit) {
        ownProps.onSubmit(jsonObj);
      }
    }
  };
  return (
    <Form
      onSubmit={(val) => handleSubmit(val)}
      initialValues={ownProps.initialValues}
    >
      <FormElement>
        {(props) => (
          <div className={styles.base}>
            <Header
              title={ownProps.initialValues ? "Edit Contact" : "Add Contact"}
              handleIcon={handleClose}
              hideSearch={true}
              icon="close"
            />
            <div className={styles.content}>
              <div className={styles.row}>
                <Input
                  placeholder="Name"
                  value={props.name}
                  hollow="true"
                  onChange={(val) => props.updateForm({ name: val })}
                  error={errors.name ? errorMessages.name : null}
                />
              </div>
              <div className={styles.row}>
                <Input
                  type="number"
                  placeholder="Phone Number"
                  value={props.phoneNumber}
                  hollow="true"
                  onChange={(val) => props.updateForm({ phoneNumber: val })}
                  error={errors.phoneNumber ? errorMessages.phoneNumber : null}
                />
              </div>
              <div className={styles.row}>
                <Input
                  placeholder="Email ID"
                  value={props.emailAdress}
                  hollow="true"
                  onChange={(val) => props.updateForm({ emailAdress: val })}
                />
              </div>
            </div>
            <div className={styles.footer}>
              <Button
                type="secondary"
                width="100%"
                onClick={(val) => {
                  props.onSubmit(val);
                }}
              >
                <div className={styles.headerTitle}>Submit</div>
              </Button>
            </div>
          </div>
        )}
      </FormElement>
    </Form>
  );
}
