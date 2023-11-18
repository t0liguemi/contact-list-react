const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      loadContacts: () => {
        fetch(
          "https://playground.4geeks.com//apis/fake/contact/agenda/t0liguemi",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json();
            }
          })
          .then((data) => {
            setStore({ contacts: data });
          })
          .catch((error) => {
            console.log("error :" + error);
          });
      },
      createContact: (event) => {
        let newContact = {
          full_name: event.target.fullNameForm.value,
          email: event.target.emailForm.value,
          address: event.target.addressForm.value,
          phone: event.target.phoneNumberForm.value,
          agenda_slug: "t0liguemi",
        };
        fetch("https://playground.4geeks.com/apis/fake/contact/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newContact),
        })
          .then((resp) => {
            console.log(resp);
            if (resp.status === 201) {
              let actions=getActions();
              actions.loadContacts();
              console.log(resp.status); // the status code = 200 or code = 400 etc.
            }
          })
          .catch((error) => {
            console.log("error :" + error);
          });
      },
      editContact(editedID,event){
        let editedContact = {
          full_name: event.target.fullNameForm.value,
          email: event.target.emailForm.value,
          address: event.target.addressForm.value,
          phone: event.target.phoneNumberForm.value,
          agenda_slug: "t0liguemi",
        };
        fetch(`https://playground.4geeks.com/apis/fake/contact/${editedID}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedContact),
        })
          .then((resp) => {
            console.log(resp);
            if (resp.status === 201) {
              let actions=getActions();
              actions.loadContacts();
              console.log(resp.status); // the status code = 200 or code = 400 etc.
            }
          })
          .catch((error) => {
            console.log("error :" + error);
          });
      },

      deleteContact(deletedID) {
        console.log("trying to delete following ID");
        console.log(deletedID);
        fetch(`https://playground.4geeks.com/apis/fake/contact/${deletedID}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((resp) => {
            console.log(resp);
            if (resp.status === 201) {
              let actions=getActions();
              actions.loadContacts();
              console.log(resp.status); // the status code = 200 or code = 400 etc.
            }
          })
          .catch((error) => {
            console.log("error :" + error);
          });

      }
    }
  }
}
export default getState;
