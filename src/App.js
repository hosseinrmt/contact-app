import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (formValues) => {
    if (formValues.name && formValues.email) {
      setContacts([...contacts, { ...formValues, id: Date.now() }]);
      return;
    }
    toast.error("Name and email are required");
  };

  const deleteContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />

      <div className="contact-app">
        <nav>
          <h1>Contact Manager</h1>
        </nav>
        <ContactForm onClick={addContactHandler} />
        <ContactList onDelete={deleteContactHandler} contacts={contacts} />
      </div>
    </>
  );
};

export default App;
