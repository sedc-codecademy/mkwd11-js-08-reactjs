import { useEffect, useRef } from "react";

export default function SearchInput({ setSearchTerm }) {
  const inputRef = useRef(null); // reference to the input element

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      style={{ flexBasis: "100%", height: "50px" }}
      type="search"
      ref={inputRef}
      placeholder="Search"
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
}
