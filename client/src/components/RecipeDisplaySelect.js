import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Row,
  Col,
  CardText,
} from "reactstrap";

const RecipeDisplaySelect = (props) => {
  return (
    <Card width="18rem">
      <CardBody>
        <Row>
          <Col>
            <CardImg
              src="https://farmhouseharvest.net/wp-content/uploads/2022/01/smoked-pork-shoulder-recipe-3.png" //{props?.recipe?.image}
              alt={props?.recipe?.title}
              className="border"
            />
          </Col>
          <Col>
            <CardTitle className="m-4">{props?.recipe?.title}</CardTitle>
            <CardText>{props?.recipe?.description}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default RecipeDisplaySelect;
