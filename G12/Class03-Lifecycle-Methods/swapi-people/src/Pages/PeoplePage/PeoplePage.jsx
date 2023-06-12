import React from "react";
import Button from "../../Components/Button/Button";
import axios from "axios";
import PersonList from "../../Components/PersonList/PersonList";
import "./PeoplePage.css";
import PersonDetails from "../../Components/PersonDetails/PersonDetails";

const SWAPI_URL = "https://swapi.dev/api/people";

class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      selectedPerson: null,
      isPersonDetailsShown: true,
    };
  }

  togglePersonDetails() {
    this.setState(prevState => ({
      isPersonDetailsShown: !prevState.isPersonDetailsShown,
    }));
  }

  onSelectPerson(personIndex) {
    this.setState(prevState => ({
      selectedPerson: prevState.people[personIndex],
    }));
  }

  componentDidMount() {
    // Only called when the component is mounted for the first time in the DOM
    console.log("Component mounted");
    axios.get(SWAPI_URL).then(response => {
      console.log(response);
      this.setState({
        people: response.data.results,
      });
    });
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  render() {
    return (
      <>
        <Button
          btnStyle={{ margin: "20px" }}
          btnText="Toggle Person Details"
          onBtnClick={this.togglePersonDetails.bind(this)}
        />
        <div className="PeoplePage">
          <PersonList
            people={this.state.people}
            selectedPerson={this.state.selectedPerson}
            onSelectPerson={this.onSelectPerson.bind(this)}
          />
          {this.state.isPersonDetailsShown && (
            <PersonDetails selectedPerson={this.state.selectedPerson} />
          )}
        </div>
      </>
    );
  }
}

export default PeoplePage;
