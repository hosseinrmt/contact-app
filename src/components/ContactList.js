import Contact from "./Contact";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      <h2>Contacts List</h2>

      <Link to="/add-contact">
        <button className="addNewBtn">New Contact ?</button>
      </Link>

      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </div>
  );
};

export default ContactList;
