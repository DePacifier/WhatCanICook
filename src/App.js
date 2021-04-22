import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./homepage/homepage.component";
import SearchDirectory from "./components/search-directory/search-directory.component";
class App extends Component {
  state = {
    ingredients: "",
    selectedItemData: {},
  };

  handleIngredientsChange = (data) => {
    console.log("ingredients change");
    this.setState({ ingredients: data }, console.log(data));
  };

  handleItemClick = (data) => {};

  ErrorPage = () => (
    <div>
      <h1>Page Not Found !!!</h1>
    </div>
  );

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <HomePage
              ingredients={this.state.ingredients}
              handleIngredientsChange={this.handleIngredientsChange}
              history={history}
            />
          )}
        />
        <Route
          path="/searchfoods/ingredients"
          render={({ history, match }) => (
            <SearchDirectory
              ingredients={this.state.ingredients}
              handleIngredientsChange={this.handleIngredientsChange}
              handleItemClick={this.handleItemClick}
              history={history}
              match={match}
            />
          )}
        />

        <Route path="*" component={this.ErrorPage} />
      </Switch>
    );
  }
}

export default App;
