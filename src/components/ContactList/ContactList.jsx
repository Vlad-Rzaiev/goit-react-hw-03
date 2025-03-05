import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
