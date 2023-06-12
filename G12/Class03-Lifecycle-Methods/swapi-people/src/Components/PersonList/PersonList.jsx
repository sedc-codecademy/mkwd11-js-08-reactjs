import React from "react";
import "./PersonList.css";
import PersonListItem from "../PersonListItem/PersonListItem";

class PersonList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Person List Update");
    console.log(prevProps);
  }

  render() {
    return (
      <>
        {!this.props.people.length && (
          <div className="PersonList">Loading...</div>
        )}
        {!!this.props.people.length && (
          <ul className="PersonList">
            {this.props.people.map((person, personIndex) => (
              <PersonListItem
                onSelectPerson={this.props.onSelectPerson}
                isSelected={this.props.selectedPerson?.name === person.name}
                key={person.name + personIndex}
                name={person.name}
                personIndex={personIndex}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default PersonList;
