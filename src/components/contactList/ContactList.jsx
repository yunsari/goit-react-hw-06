import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

import Contact from "../contact/Contact";

import styles from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contacts.length === 0) {
    return <p className={styles.frame}>No contacts found!</p>;
  }

  return (
    <ul className={styles.frame}>
      {filtered.map((c) => (
        <Contact
          key={c.id}
          {...c}
          onDelete={() => dispatch(deleteContact(c.id))}
        />
      ))}
    </ul>
  );
}
