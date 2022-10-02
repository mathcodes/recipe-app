import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const RecipeDisplaySelect = (props) => {
  return (
    <Card width="18rem">
      <img
        src="https://farmhouseharvest.net/wp-content/uploads/2022/01/smoked-pork-shoulder-recipe-3.png" //{props?.recipe?.image}
        alt={props?.recipe?.title}
        className="border"
      />
      <CardBody>
        <CardTitle className="m-4">{props?.recipe?.title}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default RecipeDisplaySelect;
