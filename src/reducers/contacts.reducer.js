import { Actions, Status } from "../actions/contact.action";
const defaultState = {
  loading: false,
  contacts: [],
};
const contacts = (state = defaultState, action) => {
  switch (action.type) {
    case `${Actions.GETCONTACTS}_${Status.REQUESTING}`:
      return {
        ...state,
        loading: true,
      };
    case `${Actions.GETCONTACTS}_${Status.SUCCESS}`:
      return {
        ...state,
        loading: false,
        contacts: action.body?.callHistory,
      };
    case `${Actions.GETCONTACTS}_${Status.ERROR}`:
      return {
        ...state,
        loading: false,
        error: action.body,
      };
    case `${Actions.ADDCONTACT}_${Status.REQUESTING}`:
      return {
        ...state,
        loading: true,
      };
    case `${Actions.ADDCONTACT}_${Status.SUCCESS}`:
      let existingContacts = state.contacts;
      existingContacts.push(action.body);
      return {
        ...state,
        loading: false,
        contacts: existingContacts,
      };
    case `${Actions.ADDCONTACT}_${Status.ERROR}`:
      return {
        ...state,
        loading: false,
        error: action.body,
      };
    case `${Actions.EDITCONTACT}_${Status.REQUESTING}`:
      return {
        ...state,
        loading: true,
      };
    case `${Actions.EDITCONTACT}_${Status.SUCCESS}`: {
      let existingContacts = state.contacts;
      let index = existingContacts.findIndex((val) => {
        return val.id == action.body.id;
      });
      existingContacts[index] = action.body;
      return {
        ...state,
        loading: false,
        contacts: existingContacts,
      };
    }
    case `${Actions.EDITCONTACT}_${Status.ERROR}`:
      return {
        ...state,
        loading: false,
        error: action.body,
      };
    case `${Actions.DELETECONTACT}_${Status.REQUESTING}`:
      return {
        ...state,
        loading: true,
      };
    case `${Actions.DELETECONTACT}_${Status.SUCCESS}`: {
      let existingContacts = state.contacts;
      let index = existingContacts.findIndex((val) => {
        return val.id == action.body;
      });
      existingContacts.splice(index, 1);
      return {
        ...state,
        loading: false,
        contacts: existingContacts,
      };
    }
    case `${Actions.DELETECONTACT}_${Status.ERROR}`:
      return {
        ...state,
        loading: false,
        error: action.body,
      };
    default:
      return state;
  }
};

export default contacts;
