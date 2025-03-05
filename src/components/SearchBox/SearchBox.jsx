import { useId } from 'react';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const inputId = useId();

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={inputId}>
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        name="searchBox"
        id={inputId}
      />
    </div>
  );
}
