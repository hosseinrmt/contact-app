import Contact from "./Contact";
import { Link } from "react-router-dom";
import getContacts from "../service/getAllContactsService";
import { useEffect, useState } from "react";
import deleteContact from "../service/deleteContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((res) => setContacts(res.data));
  }, []);

  const deleteContactHandler = (id) => {
    deleteContact(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="contact-list">
      <h2>Contacts List</h2>

      <Link to="/add-contact">
        <button className="addNewBtn">New Contact ?</button>
      </Link>

      {contacts ? (
        contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={deleteContactHandler}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContactList;
