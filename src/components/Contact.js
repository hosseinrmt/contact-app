import { IoMdContact, IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  return (
    <section className="single-contact" key={contact.id}>
      {/* icon & name & email */}
      <div className="L-single-contact">
        <IoMdContact className="contact-icon" />

        <Link to={{ pathname: `contact/${contact.id}`, state: { contact } }}>
          <div>
            <p className="contact-name">{contact.name}</p>
            <p className="w-1">{contact.email}</p>
          </div>
        </Link>
      </div>

      {/* edit & delete */}
      <div>
        <Link to={`/edit/${contact.id}`}>
          <button className="edit-contact">
            <MdEdit />
          </button>
        </Link>
        <button className="delete-contact" onClick={() => onDelete(contact.id)}>
          <IoMdTrash />
        </button>
      </div>
    </section>
  );
};

export default Contact;
