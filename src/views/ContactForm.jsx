import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/context.js";

function ContactForm() {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="container my-5">
        <div className="d-flex justify-content-center">
          <h1>Add a new contact</h1>
        </div>
        <form
          id="contactForm"
          onSubmit={(event) => {
            actions.createContact(event);
            navigate("/list");
          }}
        >
          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input
              type="text"
              className="form-control"
              name="fullNameForm"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">E-Mail</label>
            <input type="email" className="form-control" name="emailForm" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone number</label>
            <input
              key="phoneNumber"
              type="text"
              className="form-control"
              name="phoneNumberForm"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="addressForm"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="container">
            <button type="submit" className="w-100 btn btn-primary my-2">
              Save
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
