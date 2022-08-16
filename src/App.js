import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ContactDetail from "./components/ContactDetail";
import getContacts from "./service/getAllContactsService";
import addNewComment from "./service/addNewContactService";
import deleteComment from "./service/deleteContactService";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (formValues) => {
    const newContact = {
      ...formValues,
      id: Date.now(),
    };
    setContacts([...contacts, newContact]);
    addNewComment(formValues);
  };

  const deleteContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    deleteComment(id);
  };

  useEffect(() => {
    getContacts().then((res) => setContacts(res.data));
  }, []);

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
      </div>
    </>
  );
};

export default App;
