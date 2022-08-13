import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = ({ setContacts, contacts }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    id: null,
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValues.name.trim() === "" || formValues.email.trim() === "") {
      toast.error("Name and email are required!");
      return;
    }
    setContacts([...contacts, { ...formValues, id: Date.now() }]);
    setFormValues({ name: "", email: "" });
    toast.success("Contact added successfully!");
  };

  return (
    <div className="add-contact-form">
      <h2>Add Contact</h2>

      <form className="contact-form" onSubmit={submitHandler}>
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
