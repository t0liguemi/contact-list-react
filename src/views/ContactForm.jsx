import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/context.js";

function ContactForm() {
  const { contactID } = useParams();
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  let modeEdit = false;
  if (contactID != 0) modeEdit = true;
  let existingUser = store.contacts.find(({ id }) => id == contactID);
  existingUser == undefined
    ? console.log("nada")
    : console.log(existingUser.full_name);
  return (
    <div>
      <div className="container my-5">
        <div className="d-flex justify-content-center">
          <h1>Add a new contact</h1>
        </div>
        <form
          id="contactForm"
          onSubmit={(event) => {
            if (modeEdit==true){
              actions.editContact(existingUser.id,event);navigate("/list")
            }else{
            actions.createContact(event);
            navigate("/list")}
          }}
        >
          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input
              type="text"
              className="form-control"
              name="fullNameForm"
              defaultValue={
                existingUser == undefined ? "" : existingUser.full_name
              }
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">E-Mail</label>
            <input
              type="email"
              className="form-control"
              name="emailForm"
              defaultValue={existingUser == undefined ? "" : existingUser.email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone number</label>
            <input
              key="phoneNumber"
              type="text"
              className="form-control"
              name="phoneNumberForm"
              defaultValue={existingUser == undefined ? "" : existingUser.phone}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="addressForm"
              defaultValue={
                existingUser == undefined ? "" : existingUser.address
              }
            />
          </div>
          <div className="container">
            <button type="submit" className="w-100 btn btn-primary my-2">
              Save {modeEdit == true ? "changes" : ""}
            </button>
            <button
              onClick={() => navigate("/list")}
              type="button"
              className="w-100 btn btn-secondary my-2"
            >
              Cancel and go back to contact list
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
