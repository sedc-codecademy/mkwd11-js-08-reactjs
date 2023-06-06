import classes from "./PersonInfo.module.css";
import React from "react";

class PersonInfo extends React.Component {
  firstName = "Borche";
  lastName = "Borisovski";

  render() {
    return (
      <div>
        <strong>{this.firstName}</strong>
        <strong>{this.lastName}</strong>
      </div>
    );
  }
}

export default PersonInfo;
