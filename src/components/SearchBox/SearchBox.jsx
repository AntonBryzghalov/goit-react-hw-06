import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const maxLength = 60;

function SearchBox({ value }) {
  const dispatch = useDispatch();

  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={id}
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value.trim()))}
        size={maxLength}
        maxLength={maxLength}
      />
    </div>
  );
}

export default SearchBox;
