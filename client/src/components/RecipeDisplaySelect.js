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
              src={`http://localhost:5001/${props?.recipe?.image}`}//{props?.recipe?.image}
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
