import { IoMdContact, IoMdTrash } from "react-icons/io";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => {
        return (
          <section className="single-contact" key={contact.id}>
            <div className="L-single-contact">
              <IoMdContact className="contact-icon" />

              <div>
                <p>{contact.name}</p>
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
