// import * as React from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactApp = () => {
  return (
    <div className="contact-app">
      <nav>
        <h1>Contact Manager</h1>
      </nav>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactApp;
