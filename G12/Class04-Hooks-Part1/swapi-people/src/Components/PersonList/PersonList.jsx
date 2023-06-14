import "./PersonList.css";
import PersonListItem from "../PersonListItem/PersonListItem";

const PersonList = props => {
  return (
    <>
      {!props.people.length && <div className="PersonList">Loading...</div>}
      {!!props.people.length && (
        <ul className="PersonList">
          {props.people.map((person, personIndex) => (
            <PersonListItem
              onSelectPerson={props.onSelectPerson}
              isSelected={props.selectedPerson?.name === person.name}
              key={person.name + personIndex}
              name={person.name}
              personIndex={personIndex}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PersonList;
