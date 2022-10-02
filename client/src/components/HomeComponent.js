import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import RecipeDisplaySelect from "./RecipeDisplaySelect";
import recipeServices from "../services/recipeServices";
import MainCarousel from "./Carousel";
import Button from "./Button";

const HomeComponent = () => {
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeServices
      .getAllRecipes()
      .then(getAllRecipeSuccess)
      .catch(getAllRecipeError);
  }, []);

  const getAllRecipeSuccess = (response) => {
    setRecipes(response.data.titles);
  };

  const getAllRecipeError = (err) => {
    console.error(err);
  };

  const mapRecipes = (recipe) => {
    return <RecipeDisplaySelect key={recipe.id} recipe={recipe} />;
  };

  return (
    <>
      <Container>
        <Row className="flex align-items-center text-center mt-2">
          <MainCarousel />
          <Col xs={6}>
            <Button
              className="roundButton"
              type="button"
              onClick={() => history.push("select")}
              value="Create Recipe"
              title="Create Recipe"
            />
          </Col>
        </Row>
      </Container>
      <Container className="p-2">{recipes.map(mapRecipes)}</Container>
    </>
  );
};

export default HomeComponent;
