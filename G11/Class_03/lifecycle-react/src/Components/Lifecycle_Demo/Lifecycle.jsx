import { Component } from "react";

// React.Component === Component
class LifeCycle extends Component {
  constructor(props) {
    super(props);

    console.log("Constructor");

    this.state = {
      message: "Our initial message",
      movieValue: "",
      moviesNames: ["Batman", "Spiderman", "The Avengers"],
    };
  }

  //Good for api calls
  //executes after the render
  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
  }

  //Does not execute initial
  //executes when new props or state ocurres
  componentDidUpdate(previousProps, previousState) {
    console.log("PREVIOUS VALUES: ", previousProps, previousState);
    console.log("COMPONENT DID UPDATE");
  }

  //Must return BOOLEAN
  shouldComponentUpdate(nextProps, nextState) {
    console.log("SHOULD COMPONENT UPDATE");
    console.log("NEXT VALUES: ", nextProps, nextState);
    // By default this method
    // returns true
    // When we return false the component does not update
    // return false; // oopsy =)

    if (nextState.movieValue === "Some movie") {
      // If the condition is met, we prevent update of the component
      return false;
    }

    return true;
  }

  handleChangeMovieValue = (value) => {
    this.setState({
      movieValue: value,
    });
  };

  handleAddMovieName = () => {
    //if no movieValue we prevent adding of empty movie
    if (this.state.movieValue === "") {
      return;
    }
    this.setState({
      moviesNames: [...this.state.moviesNames, this.state.movieValue],
      movieValue: "",
    });
  };

  //When the component gets destroyed
  componentWillUnmount() {}

  // IMPORTANT: This are deprecated, no longer in use

  // UNSAFE_componentWillMount() {}
  // UNSAFE_componentWillReceiveProps() {}
  // UNSAFE_componentWillUpdate() {}

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Lifecycle component</h1>
        <p>{this.state.message}</p>

        <hr />
        <br />
        <br />

        <ol>
          {this.state.moviesNames.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ol>

        <br />
        <label htmlFor="movie_name">Movie name:</label>
        <input
          type="text"
          id="movie_name"
          value={this.state.movieValue}
          onChange={(event) => {
            this.handleChangeMovieValue(event.target.value);
          }}
        />
        <button onClick={this.handleAddMovieName}>Add Movie</button>
      </div>
    );
  }
}

export default LifeCycle;
