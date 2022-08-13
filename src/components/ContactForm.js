import { useState } from "react";

const ContactForm = ({ onClick }) => {
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
    onClick(formValues);
    setFormValues({ name: "", email: "" });
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

        <button className="addToContactBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
