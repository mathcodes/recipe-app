import axios from "axios";

const recipeEndpoint = "http://localhost:5001/recipe";

const getAllRecipes = () => {
  const config = {
    method: "GET",
    url: recipeEndpoint,
    headers: { "content-type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

const getRecipeByTitle = (title) => {
  const config = {
    method: "GET",
    url: `${recipeEndpoint}/search/titles/${title}`,
    headers: { "content-type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

const recipeServices = { getAllRecipes, getRecipeByTitle };

export default recipeServices;
