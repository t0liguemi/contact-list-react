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

function ContactCard(props){
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <li key={"main" + props.id} className="list-group-item d-flex p-4">
      <div className="w-25">
        <div className="w-75">
          <div className="flex-shrink-0 mx-5 ratio ratio-1x1 w-75">
            <img
              className="img-fluid object-fit-cover rounded-circle"
              src={
                "https://source.unsplash.com/random/300x200?sig=" +
                Math.random()
              }
              alt="person profile photo"
            />
          </div>
        </div>
      </div>
      <div className="flex-grow-1 ms-4 d-flex flex-col">
        <ul className="list-group list-group-flush">
          <li
            key={props.id + "Full Name"}
            className="fs-4 list-group-item border-0"
          >
            {props.full_name}
          </li>
          <li
            key={props.id + "Address"}
            className="text-secondary fs-5 fw-semibold list-group-item border-0"
          >
            <HiLocationMarker className="me-2" />
            {props.address}
          </li>
          <li
            key={props.id + "Phone"}
            className="fw-semibold text-secondary list-group-item border-0"
          >
            <AiFillPhone className="me-2" />
            {props.phone}
          </li>
          <li
            key={props.id + "Email"}
            className="fw-semibold text-secondary list-group-item border-0"
          >
            <AiFillMail className="me-2" />
            {props.email}
          </li>
        </ul>
      </div>
      <div className="d-flex flex-row-reverse me-5 align-items-start">
        <button
          className="fs-3 bg-transparent border-0"
          onClick={() => {
            if (
              window.confirm(
                "Do you really want to delete " + props.full_name + "?"
              )
            ) {
              actions.deleteContact(props.id);
            }
          }}
        >
          <AiFillDelete className="pe-none mx-3" />
        </button>
        <button
          className="fs-3 bg-transparent border-0"
          id={"Edit " + props.full_name}
          onClick={() => navigate("/addcontact/" + props.id)}
        >
          <AiFillEdit className="mx-3" />
        </button>
      </div>
    </li>
  );
};
export default ContactCard