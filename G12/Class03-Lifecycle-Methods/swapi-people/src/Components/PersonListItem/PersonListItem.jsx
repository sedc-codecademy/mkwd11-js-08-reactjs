import "./PersonListItem.css";

const PersonListItem = props => {
  console.log(props.isSelected);

  return (
    <li
      style={{
        backgroundColor: props.isSelected && "rgb(134, 199, 255)",
      }}
      onClick={() => {
        props.onSelectPerson(props.personIndex);
      }}
      className="PersonListItem"
    >
      {props.name}
    </li>
  );
};

export default PersonListItem;
