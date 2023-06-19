import { useState } from "react";
import "./SearchInput.css";
import { useEffect } from "react";

const SearchInput = ({ updateSearchValue }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      updateSearchValue(value);
    }, 1000);

    // We need the return to make sure that the timeout is cleared
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder="Start typing to search for countries"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
