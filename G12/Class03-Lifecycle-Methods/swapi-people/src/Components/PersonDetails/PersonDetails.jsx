import React from "react";
import "./PersonDetails.css";

class PersonDetails extends React.Component {
  interval;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("I am a memory leak!");
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Person Details Component Unmounted");
  }

  render() {
    return (
      <div className="PersonDetails">
        <div className="details-container">
          {!this.props.selectedPerson && (
            <div className="placeholder-container">No Person Selected</div>
          )}
          {this.props.selectedPerson && (
            <>
              <div>
                <strong>Name: </strong>
                {this.props.selectedPerson.name}
              </div>
              <div>
                <strong>Birth Year: </strong>
                {this.props.selectedPerson.birth_year}
              </div>
              <div>
                <strong>Gender: </strong>
                {this.props.selectedPerson.gender}
              </div>
              <div>
                <strong>Skin Color: </strong>
                {this.props.selectedPerson.skin_color}
              </div>
              <div>
                <strong>Eye Color: </strong>
                {this.props.selectedPerson.eye_color}
              </div>
              <div>
                <strong>Hair Color: </strong>
                {this.props.selectedPerson.hair_color}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default PersonDetails;
