import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="contact-app">
      <nav>
        <h1>Contact Manager</h1>
      </nav>
      <ContactForm setContacts={setContacts} contacts={contacts} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default ContactApp;
