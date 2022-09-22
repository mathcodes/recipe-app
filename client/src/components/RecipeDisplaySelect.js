import React from "react";
//mockup visually
const RecipeDisplaySelect = (props) => {
  console.log("Display -->", props);
  return (
    <div className="border">
      <img
        src="https://farmhouseharvest.net/wp-content/uploads/2022/01/smoked-pork-shoulder-recipe-3.png" //{props?.recipe?.image}
        alt={props?.recipe?.title}
        height="90vh"
        width="120vw"
        className="border"
      />
      <text className="m-4">{props?.recipe?.title}</text>
    </div>
  );
};

export default RecipeDisplaySelect;
