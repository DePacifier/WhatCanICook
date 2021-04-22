import React from "react";
import "./homepage.styles.scss";

const HomePage = (props) => {
  const handleSubmit = () => {
    props.history.push("/searchfoods/ingredients");
  };

  const handleChange = (e) => {
    props.handleIngredientsChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") handleSubmit();
  };

  return (
    <div>
      <h1>What Can I Cook ?</h1>
      <p>Type what ingredients you have at the moment</p>
      <input
        type="text"
        placeholder="Eg. apple, ginger"
        value={props.ingredients}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="true"
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default HomePage;
