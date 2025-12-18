import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.frame}>
      <label>
        Search Contacts:
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type name to filter"
        />
      </label>
    </div>
  );
};

export default SearchBox;