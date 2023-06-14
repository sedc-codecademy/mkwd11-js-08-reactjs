import { Component } from "react";
import "./ProductCard.css";

export class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
    };
  }

  toggleShowMore = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };

  render() {
    return (
      <div className="card">
        <h3>{this.props.productProps.title}</h3>
        <img
          src={this.props.productProps.image}
          alt={this.props.productProps.title}
          width={180}
        />

        {this.state.showMore && (
          <div>
            <p>{this.props.productProps.description}</p>
            <p>Price: {this.props.productProps.price}</p>
            <p>Price: {this.props.productProps.rating}</p>
          </div>
        )}

        {/* Example two change class with condition*/}
        {/* <div className={this.state.showMore ? "show" : "hide"}>
          <p>{this.props.productProps.description}</p>
          <p>Price: {this.props.productProps.price}</p>
          <p>Price: {this.props.productProps.rating}</p>
        </div> */}

        <div className="moreButton" onClick={this.toggleShowMore}>
          {this.state.showMore ? "Hide" : "Show More"}
          {/* Show More */}
        </div>
      </div>
    );
  }
}
