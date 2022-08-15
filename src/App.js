import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ContactDetail from "./components/ContactDetail";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (formValues) => {
    setContacts([...contacts, { ...formValues, id: Date.now() }]);
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

        <Switch>
          <Route path="/contact/:id" component={ContactDetail} />;
          <Route
            path="/add-contact"
            render={() => <ContactForm onClick={addContactHandler} />}
          />
          <Route
            path="/"
            exact={true}
            render={() => (
              <ContactList
                onDelete={deleteContactHandler}
                contacts={contacts}
              />
            )}
          />
        </Switch>

        {/* <ContactForm onClick={addContactHandler} /> */}
        {/* <ContactList onDelete={deleteContactHandler} contacts={contacts} /> */}
      </div>
    </>
  );
};

export default App;
