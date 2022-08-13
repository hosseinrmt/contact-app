import ContactApp from "./components/ContactApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <ContactApp />
    </>
  );
};

export default App;
