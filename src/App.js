import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/EditContact";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
          <Route path="/edit/:id" component={EditContact} />
          <Route path="/contact/:id" component={ContactDetail} />
          <Route path="/add-contact" component={ContactForm} />
          <Route path="/" exact component={ContactList} />
        </Switch>
      </div>
    </>
  );
};

export default App;
