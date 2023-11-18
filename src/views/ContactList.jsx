import React, { useContext } from "react";
import { Context } from "../store/context.js";
import { useNavigate } from "react-router-dom";
import {
  AiFillEdit,
  AiFillDelete,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";

function ContactList() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const emptyList = () => {
    if (store.contacts.length === 0) {
      return <li key="noItems" className="list-group-item d-flex p-4"><button className="btn btn-secondary" onClick={() => navigate("/addcontact/0")}>No contacts yet, click here to start.</button></li>;
      <></>;
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
        {/* FROM HERE MUST BE CLEARED FOR INFO REPLACEMENT AND REPETITION OF FOLLOWING LI ITEM */}
        {emptyList()}
        {store.contacts.map((item) => {
          return (
            <li key={"main" + item.id} className="list-group-item d-flex p-4">
              <div className="w-25">
                <div className="w-75">
                  <div className="flex-shrink-0 mx-5 ratio ratio-1x1 w-75">
                    <img
                      className="img-fluid object-fit-cover rounded-circle"
                      src={"https://source.unsplash.com/random/300x200?sig="+Math.random()}
                      alt="person profile photo"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-grow-1 ms-4 d-flex flex-col">
                <ul className="list-group list-group-flush">
                  <li
                    key={item.id + "Full Name"}
                    className="fs-4 list-group-item border-0"
                  >
                    {item.full_name}
                  </li>
                  <li
                    key={item.id + "Address"}
                    className="text-secondary fs-5 fw-semibold list-group-item border-0"
                  >
                    <HiLocationMarker className="me-2" />
                    {item.address}
                  </li>
                  <li
                    key={item.id + "Phone"}
                    className="fw-semibold text-secondary list-group-item border-0"
                  >
                    <AiFillPhone className="me-2" />
                    {item.phone}
                  </li>
                  <li
                    key={item.id + "Email"}
                    className="fw-semibold text-secondary list-group-item border-0"
                  >
                    <AiFillMail className="me-2" />
                    {item.email}
                  </li>
                </ul>
              </div>
              <div className="d-flex flex-row-reverse me-5 align-items-start">
                <button
                  className="fs-3 bg-transparent border-0"
                  onClick={() => actions.deleteContact(item.id)}
                >
                  <AiFillDelete className="pe-none mx-3" />
                </button>
                <button
                  className="fs-3 bg-transparent border-0"
                  id={"Edit " + item.full_name}
                  onClick={() => navigate("/addcontact/"+item.id)}
                >
                  <AiFillEdit className="mx-3" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ContactList;
