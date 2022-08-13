import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { toast } from "react-toastify";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (formValues) => {
    if (formValues.name.trim() === "" || formValues.email.trim() === "") {
      toast.error("Name and email are required");
      return;
    }
    setContacts([...contacts, { ...formValues, id: Date.now() }]);
  };

  const deleteContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="contact-app">
      <nav>
        <h1>Contact Manager</h1>
      </nav>
      <ContactForm onClick={addContactHandler} />
      <ContactList onDelete={deleteContactHandler} contacts={contacts} />
    </div>
  );
};

export default ContactApp;
