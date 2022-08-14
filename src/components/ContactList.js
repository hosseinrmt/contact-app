import { IoMdContact, IoMdTrash } from "react-icons/io";
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
          <section className="single-contact" key={contact.id}>
            <div className="L-single-contact">
              <IoMdContact className="contact-icon" />

              <div>
                <p className="contact-name">{contact.name}</p>
                <p>{contact.email}</p>
              </div>
            </div>

            <button
              className="delete-contact"
              onClick={() => onDelete(contact.id)}
            >
              <IoMdTrash />
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default ContactList;
