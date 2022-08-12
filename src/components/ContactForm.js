const ContactForm = () => {
  return (
    <div className="add-contact-form">
      <h2>Add Contact</h2>
      <form className="contact-form">
        <label>Name</label>
        <input maxLength={60} placeholder="name" type="text" />

        <label>Email</label>
        <input maxLength={60} placeholder="email" type="email" />

        <button>Add</button>
      </form>
    </div>
  );
};

export default ContactForm;
