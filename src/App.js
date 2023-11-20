import "./App.css";
import ContactForm from "./views/ContactForm.jsx";
import ContactList from "./views/ContactList.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/context.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/list" element={<ContactList />} />
          <Route path="/addcontact/:contactID" element={<ContactForm />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
