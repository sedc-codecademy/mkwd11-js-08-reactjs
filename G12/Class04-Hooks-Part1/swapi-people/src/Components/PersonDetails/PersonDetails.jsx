import React, { useEffect } from "react";
import "./PersonDetails.css";

const PersonDetails = props => {
  useEffect(() => {
    // This is called only once
    console.log("Component Mounted");
    const interval = setInterval(() => {
      console.log("I am a memory leak!");
    }, 1000);

    return () => {
      // This is called whenever the component is unmounted by returning a callback from the useEffect
      clearInterval(interval);
      console.log("Component Unmounted");
    };
  });

  // clearInterval(this.interval);
  // console.log("Person Details Component Unmounted");

  return (
    <div className="PersonDetails">
      <div className="details-container">
        {!props.selectedPerson && (
          <div className="placeholder-container">No Person Selected</div>
        )}
        {props.selectedPerson && (
          <>
            <div>
              <strong>Name: </strong>
              {props.selectedPerson.name}
            </div>
            <div>
              <strong>Birth Year: </strong>
              {props.selectedPerson.birth_year}
            </div>
            <div>
              <strong>Gender: </strong>
              {props.selectedPerson.gender}
            </div>
            <div>
              <strong>Skin Color: </strong>
              {props.selectedPerson.skin_color}
            </div>
            <div>
              <strong>Eye Color: </strong>
              {props.selectedPerson.eye_color}
            </div>
            <div>
              <strong>Hair Color: </strong>
              {props.selectedPerson.hair_color}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PersonDetails;
