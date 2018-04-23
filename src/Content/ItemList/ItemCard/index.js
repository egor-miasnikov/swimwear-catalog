import React from "react";
import { Card, CardMedia, CardTitle, CardText } from "material-ui/Card";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default ({ item, categoryName }) => (
  <Link to={`/${categoryName}/${item.id}`}>
    <Card>
      <CardMedia overlay={<CardTitle title={item.name} />}>
        <img src={item.image} alt="" />
      </CardMedia>
      <CardTitle title={`Цена: ${item.price} BYN`} />
      <CardText>{item.description}</CardText>
    </Card>
  </Link>
);
