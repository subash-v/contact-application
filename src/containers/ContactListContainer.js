import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getContacts,
  addContact,
  editContact,
  deleteContact,
} from "../actions/contact.action";
import Loader from "../components/common/Loader";
import { ModalControl } from "../components/common/modal/ModalRoot";
import ModalLeftPanel from "../components/common/modal/ModalLeftPanel";
import ContactList from "../components/contacts/ContactList";
import AddContactModal from "../components/FormModal.js/AddContactModal";
export default function ContactListContainer(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const contacts = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  const addContactModal = (data) => {
    return (
      <ModalLeftPanel>
        <ModalControl>
          {(control) => (
            <AddContactModal
              initialValues={data}
              closeModal={control.closeModal}
              onSubmit={(val) =>
                data
                  ? handleEditConatct(val, control.closeModal)
                  : handleAddContact(val, control.closeModal)
              }
            />
          )}
        </ModalControl>
      </ModalLeftPanel>
    );
  };
  const handleEditConatct = (data, callBack) => {
    dispatch(editContact(data, callBack));
  };
  const handleAddContact = (data, callBack) => {
    dispatch(addContact(data, callBack));
  };
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ModalControl>
      {(control) => {
        return (
          <React.Fragment>
            {loading && <Loader />}
            <ContactList
              contacts={contacts}
              history={props.history}
              addContact={(data) => control.openModal(addContactModal(data))}
              handleDeleteContact={handleDeleteContact}
            />
          </React.Fragment>
        );
      }}
    </ModalControl>
  );
}
