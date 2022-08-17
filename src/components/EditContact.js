import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import getContacts from "../service/getAllContactsService";
import getSingleContact from "../service/getSingleContactService";
import updateContact from "../service/updateContactService";

const EditContact = ({ history, match }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    id: null,
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    updateContact(match.params.id, formValues);
    getContacts();
    history.push("/");
  };

  useEffect(() => {
    getSingleContact(match.params.id).then((res) => setFormValues(res.data));
  }, []);

  return (
    <div className="add-contact-form">
      <h2>Edit Contact</h2>

      <form className="contact-form" onSubmit={submitForm}>
        <label>Name</label>
        <input
          maxLength={30}
          value={formValues.name}
          name="name"
          onChange={changeHandler}
          placeholder="name"
          type="text"
        />

        <label>Email</label>
        <input
          maxLength={30}
          value={formValues.email}
          name="email"
          onChange={changeHandler}
          placeholder="email"
          type="email"
        />

        <div>
          <button className="cancelBtn" onClick={() => history.push("/")}>
            Cancel
          </button>
          <button className="addToContactBtn" type="submit">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(EditContact);
