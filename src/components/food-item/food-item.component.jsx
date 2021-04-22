import React from "react";

const FoodItem = ({
  id,
  image,
  title,
  usedIngredientsCount,
  missedIngrdients,
  likes,
  handleClick,
}) => {
  const handleItemClick = () => {
    handleClick(id);
  };

  return (
    <div onClick={handleItemClick} className="food-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>Ingredients Required: {usedIngredientsCount}</p>
        <p>Missing Ingredients: {missedIngrdients}</p>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};

export default FoodItem;
