import React, { Component } from "react";
import "./search-directory.styles.scss";
import FoodItem from "../food-item/food-item.component";
import FoodDetails from "../food-details/food-details.component";

export default class SearchDirectory extends Component {
  state = {
    foodItemSelected: false,
    selectedFoodItemId: 0,
    searchedFoods: [
      {
        id: 123,
        image: "https://www.w3schools.com/images/w3lynx_200.png",
        title: "happy meal",
        usedIngredientsCount: 3,
        missedIngrdients: "onion, carrots",
        likes: 3,
      },
      {
        id: 1234,
        image: "https://www.w3schools.com/images/w3lynx_200.png",
        title: "meatty",
        usedIngredientsCount: 2,
        missedIngrdients: "",
        likes: 1,
      },
      {
        id: 12348,
        image: "https://www.w3schools.com/images/w3lynx_200.png",
        title: "ornage salad",
        usedIngredientsCount: 5,
        missedIngrdients: "onion, carrots",
        likes: 10,
      },
    ],
  };

  componentDidMount() {
    window.addEventListener("popstate", this.onBackButtonEvent);
    //Perofrm API request for food items
  }

  onBackButtonEvent = (e) => {
    this.setState({
      foodItemSelected: false,
    });
  };

  handleBack = () => {
    this.setState(
      {
        foodItemSelected: false,
      },
      this.props.history.push("/searchfoods/ingredients/")
    );
  };

  handleClick = (id) => {
    this.setState(
      {
        foodItemSelected: true,
        selectedFoodItemId: id,
      },
      this.props.history.push(`/searchfoods/ingredients/${id}`)
    );
  };

  handleChange = (e) => {
    this.props.handleIngredientsChange(e.target.value);
  };

  handleSubmit = () => {
    // Make API Call and update searched foods
    console.log("Handle Submit called for an API request");
  };

  handleKeyDown = (e) => {
    if (e.code === "Enter") {
      this.handleSubmit();
    }
  };

  render() {
    const foodsDirectory = (
      <div>
        <div>
          <label>Ingredients</label>
          <input
            type="text"
            value={this.props.ingredients}
            autoComplete="true"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          ></input>
          <button onClick={this.handleSubmit}>Search</button>
        </div>
        <div className="directory-menu">
          {this.state.searchedFoods.map(({ id, ...otherSectionProps }) => (
            <FoodItem
              key={id}
              id={id}
              {...otherSectionProps}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );

    return (
      <div>
        {this.state.foodItemSelected === false ? (
          foodsDirectory
        ) : (
          <FoodDetails
            handleBack={this.handleBack}
            data={this.state.searchedFoods.find(
              (food) => food.id === this.state.selectedFoodItemId
            )}
          />
        )}
      </div>
    );
  }
}
