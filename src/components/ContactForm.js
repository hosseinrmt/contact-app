import { useState } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const ContactForm = ({ onClick, history }) => {
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

    if (formValues.name && formValues.email) {
      onClick(formValues);
      history.push("/");
    } else {
      toast.error("Name and email are required");
    }
  };

  return (
    <div className="add-contact-form">
      <h2>Add Contact</h2>

      <form className="contact-form" onSubmit={submitForm}>
        <label>Name</label>
        <input
          maxLength={40}
          value={formValues.name}
          name="name"
          onChange={changeHandler}
          placeholder="name"
          type="text"
        />

        <label>Email</label>
        <input
          maxLength={40}
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(ContactForm);
