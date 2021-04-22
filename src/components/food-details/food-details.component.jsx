import React, { Component } from "react";
import "./food-details.styles.scss";

class FoodDetails extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <h2>Food Name</h2>
        <div>
          <img src="" alt="" />
          <div>
            <p>Food Description</p>
            <p>health score: </p>
            <p>Ready in Minutes: </p>
            <p>Servings: </p>
          </div>
        </div>
        <div>
          <h3>Preparation</h3>
          <p>Instructions</p>
        </div>
        <button onClick={this.props.handleBack}>Back</button>
      </div>
    );
  }
}

export default FoodDetails;
