import { IoMdContact, IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ContactDetail = ({ location }) => {
  const contact = location.state.contact;
  return (
    <div className="contact-detail">
      <IoMdContact className="contactDetailIcon" />
      <p className="contactMainDetail">{contact.name}</p>
      <p className="contactMainDetail">{contact.email}</p>
      <Link to="/">
        <IoMdArrowBack className="ArrowBackIcon" />
      </Link>
    </div>
  );
};

export default ContactDetail;
