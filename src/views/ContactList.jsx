import React, { useContext } from "react";
import { Context } from "../store/context.js";
import { useNavigate } from "react-router-dom";
import ContactCard  from "../components/ContactCard.jsx";

function ContactList() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const emptyList = () => {
    if (store.contacts.length === 0) {
      return (
        <li key="noItems" className="list-group-item d-flex p-4">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/addcontact/0")}
          >
            No contacts yet, click here to start.
          </button>
        </li>
      );
    }
  };
  return (
    <div className="container my-5">
      <div className="d-flex flex-row-reverse">
        <button
          onClick={() => navigate("/addcontact/0")}
          className="btn btn-success my-3 "
        >
          Add new contact
        </button>
      </div>
      <ul className="list-group">
        {emptyList()}
        {store.contacts.map((item) => {
          return (
            <ContactCard id={item.id} full_name={item.full_name} email={item.email} phone={item.phone} address={item.address}/>
          );
        })}
      </ul>
    </div>
  );
}
export default ContactList;