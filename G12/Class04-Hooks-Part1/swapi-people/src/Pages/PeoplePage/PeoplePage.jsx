import React from "react";
import Button from "../../Components/Button/Button";
import axios from "axios";
import PersonList from "../../Components/PersonList/PersonList";
import "./PeoplePage.css";
import PersonDetails from "../../Components/PersonDetails/PersonDetails";
import { useState, useEffect } from "react";

const SWAPI_URL = "https://swapi.dev/api/people";

const PeoplePage = props => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isPersonDetailsShown, setIsPersonDetailsShown] = useState(true);

  const togglePersonDetails = () => {
    setIsPersonDetailsShown(prevState => !prevState);
  };

  const onSelectPerson = personIndex => {
    setSelectedPerson(people[personIndex]);
  };

  // Runs whenver the component is rerendered (updated), same as componentDidUpdate
  useEffect(() => {
    console.log("Component rerendered");
  });

  // Use effect when defined with an empty dependancy array will only be called once when the component is mounted , basically it has very similar behavior to componentDidMount method
  useEffect(() => {
    console.log("use effect called");
    // Only called when the component is mounted for the first time in the DOM
    console.log("Component mounted");

    axios.get(SWAPI_URL).then(response => {
      console.log(response);
      setPeople(response.data.results);
    });
  }, []);

  // Runs only when the people dependancy changes
  useEffect(() => {
    console.log("This is from the people log", people);
  }, [people]);

  //! Be careful of setting a dependancy of useEffect withing that same useEffect because it will create a very nasty infinite loop
  // useEffect(() => {
  //   console.log("use effect called");
  //   // Only called when the component is mounted for the first time in the DOM
  //   console.log("Component mounted");
  //   axios.get(SWAPI_URL).then(response => {
  //     console.log(response);
  //     setPeople(response.data.results);
  //   });
  // }, [people]);

  return (
    <>
      <Button
        btnStyle={{ margin: "20px" }}
        btnText="Toggle Person Details"
        onBtnClick={togglePersonDetails}
      />
      <div className="PeoplePage">
        <PersonList
          people={people}
          selectedPerson={selectedPerson}
          onSelectPerson={onSelectPerson}
        />
        {isPersonDetailsShown && (
          <PersonDetails selectedPerson={selectedPerson} />
        )}
      </div>
    </>
  );
};

export default PeoplePage;
