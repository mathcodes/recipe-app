import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import RecipeDisplaySelect from "./RecipeDisplaySelect";
import recipeServices from "../services/recipeServices";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://picsum.photos/id/123/1200/400",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

const HomeComponent = () => {
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    recipeServices
      .getAllRecipes()
      .then(getAllRecipeSuccess)
      .catch(getAllRecipeError);
  }, []);

  const getAllRecipeSuccess = (response) => {
    console.log(response.data.titles);
    setRecipes(response.data.titles);
  };

  const getAllRecipeError = (err) => {
    console.error(err);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          style={{ height: "20vh", width: "60vw" }}
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const mapRecipes = (recipe) => {
    return <RecipeDisplaySelect recipe={recipe} />;
  };

  return (
    <>
      <Container>
        <Row className="flex align-items-center text-center mt-2">
          <Col xs={6}>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />

              {slides}

              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Col>
          <Col xs={6}>
            <input
              className="roundButton"
              type="button"
              onClick={() => history.push("select")}
              value="Create Recipe"
            />
          </Col>
        </Row>
      </Container>
      <Container className="p-2">{recipes.map(mapRecipes)}</Container>
    </>
  );
};

export default HomeComponent;
