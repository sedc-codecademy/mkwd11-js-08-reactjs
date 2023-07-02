import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../common/actions/productActions";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="input-group my-3">
      <input
        type="search"
        className="form-control"
        placeholder="Search"
        onChange={e => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
};

export default Search;

// dispatch({
//   type: SET_SEARCH_TERM,
//   payload: searchTerm,
// });
