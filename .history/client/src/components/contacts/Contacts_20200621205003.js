import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "../contacts/ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <div>
      <Fragment>
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition>
                  <ContactItem key={contact.id} contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition>
                  <ContactItem key={contact.id} contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      </Fragment>
    </div>
  );
};

export default Contacts;
