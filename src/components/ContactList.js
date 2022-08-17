import Contact from "./Contact";
import { Link } from "react-router-dom";
import getContacts from "../service/getAllContactsService";
import { useEffect, useState } from "react";
import deleteContact from "../service/deleteContactService";

const ContactList = () => {
  const [allcontacts, setAllContacts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getContacts().then((res) => {
      setContacts(res.data);
      setAllContacts(res.data);
    });
  }, []);

  const deleteContactHandler = (id) => {
    deleteContact(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
    const searchValue = e.target.value.toLowerCase();

    if (searchValue !== "") {
      const filteredContacts = allcontacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLocaleLowerCase()
          .includes(searchValue);
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allcontacts);
    }
  };

  return (
    <div className="contact-list">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <h2>Contacts List</h2>

        <Link to="/add-contact">
          <button className="addNewBtn">New Contact ?</button>
        </Link>
      </div>

      <div>
        <input
          className="flex w-full"
          value={searchTerm}
          onChange={changeHandler}
          type="text"
          placeholder="Search..."
        />
      </div>

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
