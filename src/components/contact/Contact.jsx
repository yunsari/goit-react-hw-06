import styles from "./Contact.module.css";

const Contact = ({ cont, onDelete }) => {
  return (

    <li className={styles.item}>
      <div>
        <ul className={styles.item}>
          <li>{cont.name}</li>
          <li>{cont.number}</li>
        </ul>
      </div>
      <div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;
