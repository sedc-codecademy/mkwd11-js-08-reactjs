import "./CounterClass.css";
import React from "react";
import Button from "../Button/Button";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    // this must be called state in order for react to know that it is a dynamic property tha can be changed with user input
    this.state = {
      counter: 0,
    };
  }

  add() {
    console.log("add");
    this.setState(prevState => {
      if (prevState.counter >= 10) return prevState;

      console.log("Previous add state", prevState);

      return {
        counter: prevState.counter + 1,
      };
    });
  }

  remove() {
    console.log("remove");
    this.setState(prevState => {
      if (prevState.counter === 0) return prevState;

      console.log("Previous remove state", prevState);
      return {
        counter: prevState.counter - 1,
      };
    });
  }

  render() {
    return (
      <div className="counter">
        <div>{this.props.title}</div>
        <div className="counter-display">{this.state.counter}</div>
        <div className="counter-controls">
          <Button btnText="Remove 1" onBtnClick={this.remove.bind(this)} />
          <Button btnText="Add 1" onBtnClick={this.add.bind(this)} />
        </div>
      </div>
    );
  }
}
