import { IoMdContact, IoMdTrash } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  return (
    <section className="single-contact" key={contact.id}>
      <div className="L-single-contact">
        <IoMdContact className="contact-icon" />

        <Link to={{ pathname: `contact/${contact.id}`, state: { contact } }}>
          <div>
            <p className="contact-name">{contact.name}</p>
            <p className="w-1">{contact.email}</p>
          </div>
        </Link>
      </div>

      <button className="delete-contact" onClick={() => onDelete(contact.id)}>
        <IoMdTrash />
      </button>
    </section>
  );
};

export default Contact;
