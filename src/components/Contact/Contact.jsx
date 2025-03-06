import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <div className={styles.iconTextWrap}>
          <FaUser className={styles.icon} />
          <p className={styles.contactName}>{name}</p>
        </div>
        <div className={styles.iconTextWrap}>
          <FaPhone className={styles.icon} />
          <p className={styles.contactNumber}>{number}</p>
        </div>
      </div>

      <button
        className={styles.button}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
}
