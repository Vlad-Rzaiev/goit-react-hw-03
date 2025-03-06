import styles from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        name="searchBox"
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
}
