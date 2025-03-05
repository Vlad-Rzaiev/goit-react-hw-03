import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact({ contact }) {
  return (
    <>
      <div>
        <div className={styles.iconTextWrap}>
          <FaUser className={styles.icon} />
          <p className={styles.contactName}>{contact.name}</p>
        </div>
        <div className={styles.iconTextWrap}>
          <FaPhone className={styles.icon} />
          <p className={styles.contactNumber}>{contact.number}</p>
        </div>
      </div>

      <button className={styles.button} type="button">
        Delete
      </button>
    </>
  );
}
