import Contact from '../contact/Contact.jsx'
import styles from './ContactList.module.css';

const ContactList = ({ conts, onDelete }) => {

    if (conts.length === 0) {
        return <p className={styles.frame}>No contacts found!</p>;
    }

    return (
        <ul className={styles.frame}>
            {conts.map((c) => (
                <Contact key={c.id} cont={c} onDelete={() => onDelete(c.id)} />
            ))}
        </ul>
    );
};

export default ContactList;