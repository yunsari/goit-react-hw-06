import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilter } from "../../redux/filtersSlice";

import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <div className={styles.frame}>
      <label>
        Search Contacts:
        <input
          value={value}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          placeholder="Search contact"
        />
      </label>
    </div>
  );
}
