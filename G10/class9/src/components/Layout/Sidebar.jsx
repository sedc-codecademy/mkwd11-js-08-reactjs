import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategories } from "../../common/actions/productActions";

const Sidebar = () => {
  const { categories, selectedCategories } = useSelector(state => state.shop);
  const dispatch = useDispatch();

  const handleCheckbox = (isChecked, category) => {
    if (isChecked) {
      dispatch(setSelectedCategories([...selectedCategories, category]));
    } else {
      dispatch(
        setSelectedCategories(selectedCategories.filter(c => c !== category))
      );
    }
  };

  return (
    <ul className="list-group">
      {categories.map(category => (
        <li key={category} className="list-group-item text-start">
          <input
            className="form-check-input me-1"
            type="checkbox"
            id={category}
            onClick={e => handleCheckbox(e.target.checked, category)}
          />
          <label htmlFor={category} className="form-check-label stretched-link">
            {category}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
