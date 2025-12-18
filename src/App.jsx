import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { useState } from "react";

import "./App.css";

import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";

function App() {
  const dispatch = useDispatch();

  const conts = useSelector((state) => state.contacts);

  const [filter, setFilter] = useState("");

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
    return true;
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredConts = conts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAdd={handleAddContact} />

      <SearchBox value={filter} onChange={setFilter} />

      <ContactList conts={filteredConts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
