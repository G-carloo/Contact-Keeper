import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: "1",
        name: "Allison Argent",
        email: "argent@gmail.com",
        phone: "333-335-3333",
        type: "personal",
      },
      {
        id: "2",
        name: "Scott Mcall",
        email: "scott@gmail.com",
        phone: "333-334-3333",
        type: "profesional",
      },
      {
        id: "3",
        name: "Poopie Pants",
        email: "styles@gmail.com",
        phone: "323-333-3333",
        type: "profesional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //   Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //   Set Current Contact

  //   Clear Current Contact

  //   Update Contact

  //   Filter Contact

  //   Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
