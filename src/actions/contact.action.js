import { data } from "../utils/data";

export const Actions = {
  GETCONTACTS: "GETCONTACTS",
  ADDCONTACT: "ADDCONTACT",
  EDITCONTACT: "EDITCONTACT",
  DELETECONTACT: "DELETECONTACT",
};
export const Status = {
  REQUESTING: "REQUESTING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};
export function getContacts() {
  return async (dispatch) => {
    dispatch(contacts(Status.REQUESTING));
    try {
      const result = await data;
      dispatch(contacts(Status.SUCCESS, result));
    } catch (e) {
      dispatch(contacts(Status.ERROR, e.message));
    }
  };
}

export function contacts(status, response) {
  return {
    type: `${Actions.GETCONTACTS}${status ? `_${status}` : ""}`,
    status: status,
    body: response,
  };
}

export function addContact(newdata, callBack) {
  return async (dispatch) => {
    dispatch(addcontacts(Status.REQUESTING));
    try {
      dispatch(addcontacts(Status.SUCCESS, newdata));
      callBack();
    } catch (e) {
      dispatch(addcontacts(Status.ERROR, e.message));
    }
  };
}
export function addcontacts(status, response) {
  return {
    type: `${Actions.ADDCONTACT}${status ? `_${status}` : ""}`,
    status: status,
    body: response,
  };
}
export function editContact(data, callBack) {
  return async (dispatch) => {
    dispatch(editcontacts(Status.REQUESTING));
    try {
      dispatch(editcontacts(Status.SUCCESS, data));
      callBack();
    } catch (e) {
      dispatch(editcontacts(Status.ERROR, e.message));
    }
  };
}
export function editcontacts(status, response) {
  return {
    type: `${Actions.EDITCONTACT}${status ? `_${status}` : ""}`,
    status: status,
    body: response,
  };
}

export function deleteContact(id) {
  return async (dispatch) => {
    dispatch(deletecontacts(Status.REQUESTING));
    try {
      dispatch(deletecontacts(Status.SUCCESS, id));
    } catch (e) {
      dispatch(deletecontacts(Status.ERROR, e.message));
    }
  };
}
export function deletecontacts(status, response) {
  return {
    type: `${Actions.DELETECONTACT}${status ? `_${status}` : ""}`,
    status: status,
    body: response,
  };
}
