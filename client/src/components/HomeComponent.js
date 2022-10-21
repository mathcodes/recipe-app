import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import RecipeDisplaySelect from "./RecipeDisplaySelect";
import recipeServices from "../services/recipeServices";
import MainCarousel from "./Carousel";
import Button from "./Button";
import SearchBar from "./SearchBar";
import BtnContainer from "./BtnContainer";
import RecipeCard from "./RecipeCard";

const HomeComponent = () => {
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);
  const [searchVal, setSearchVal] = useState('')
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)
  
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
      // return <RecipeDisplaySelect key={recipe.id} recipe={recipe} />;
      return <RecipeCard key={recipe.id} recipe={recipe} nav={handleNav} />;
  };

  const handleNav = (id)=>{
    history.push(`select/${id}`)
  } 

  const handleClick = () => {
    setSearched(true)
    recipeServices
      .getRecipeByTitle(searchVal)
      .then(getByTitleSuccess)
      .catch(getByTitleError);
  };

  const getByTitleSuccess = (response) => {
    setResults(response.data.titles);
  };

  const getByTitleError = (err) => {
    console.error(err);
  };

  const searchHandler = (val) =>{
    setSearchVal(val)
  }

  return (
    <>
      <Container className="home-container">
          <Row>
          <Col xs={7}>
            <MainCarousel recipes={recipes}/>
          </Col>
          <Col xs={5} className='home-button'>
            <Button
              type="button"
              onClick={() => history.push("select")}
              value="Create Recipe"
              title="Create Recipe"
            />
          </Col>
        </Row>
      </Container>
      <Container className="p-2">
        <SearchBar func={handleClick} onChange={searchHandler} searchVal={searchVal}/>
        {searched && !results[0]?
          <div className="text-center" style={{fontSize:'2rem'}}>No results found</div>
          :
          results.length >=1?
            results.map(mapRecipes)
            : 
            recipes.map(mapRecipes)}
      </Container>
    </>
  );
};

export default HomeComponent;

