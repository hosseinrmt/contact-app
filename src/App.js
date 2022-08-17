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
import EditContact from "./components/EditContact";
import updateContact from "./service/updateContactService";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((res) => setContacts(res.data));
  }, []);

  const addContactHandler = (formValues) => {
    const newContact = { ...formValues, id: Date.now() };
    addNewComment(newContact);
    setContacts([...contacts, newContact]);
  };

  const EditContactHandler = (contact, id) => {
    updateContact(id, contact).then((res) =>
      getContacts().then((res) => setContacts(res.data))
    );
  };

  const deleteContactHandler = (id) => {
    deleteComment(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

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
          <Route
            path="/edit/:id"
            component={() => <EditContact onClick={EditContactHandler} />}
          />
          ;
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
