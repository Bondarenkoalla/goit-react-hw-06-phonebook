import "./App.css";

import Form from "./Components/Form/Form";
import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import Finder from "./Components/Finder/Finder";
import FormList from "./Components/FormList/FormList";

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };

  // onSubmitHandler = (name, number) => {
  //   const isAlreadyInContacts = this.state.contacts.some(
  //     (contact) => contact.name === name
  //   );
  //   const item = {
  //     name,
  //     number,
  //     id: uuidv4(),
  //   };
  //   if (isAlreadyInContacts) {
  //     alert("вы что такое делаете");
  //     return;
  //   }
  //   this.setState((prevState) => ({ contacts: [item, ...prevState.contacts] }));
  //   console.log(this.state.contacts);
  // };

  // onFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // deleteItem = (contactId) => {
  //   this.setState((prevState) => {
  //     return {
  //       contacts: prevState.contacts.filter(
  //         (contact) => contact.id !== contactId
  //       ),
  //     };
  //   });
  // };

  // add localStorage
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) { this.setState({ contacts: parsedContacts }) }

  // }

  render() {
    // const { contacts, filter } = this.state;
    // const includingContacts = contacts.filter((contact) =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );
    return (
      <div className="App">
        <Form />
        <Finder />
        <FormList />
      </div>
    );
  }
}
export default App;
