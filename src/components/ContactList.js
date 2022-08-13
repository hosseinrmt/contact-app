import { IoMdContact, IoMdTrash } from "react-icons/io";
import { toast } from "react-toastify";

const ContactList = ({ contacts, setContacts }) => {
  const deleteHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    toast.success("Contact deleted successfully!");
  };

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
              onClick={() => deleteHandler(contact.id)}
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
