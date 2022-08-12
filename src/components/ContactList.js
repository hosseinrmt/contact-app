import { IoMdContact, IoMdTrash } from "react-icons/io";

const ContactList = () => {
  return (
    <div className="contact-list">
      <section className="single-contact">
        <div className="L-single-contact">
          <IoMdContact className="contact-icon"/>

          <div>
            <p>Hossein</p>
            <p>hossein@exam.com</p>
          </div>
        </div>

        <button className="delete-contact">
          <IoMdTrash />
        </button>
      </section>
    </div>
  );
};

export default ContactList;
