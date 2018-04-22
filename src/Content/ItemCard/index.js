import React from "react";
import { Card, CardMedia, CardTitle, CardText } from "material-ui/Card";

export default ({ item }) => (
  <Card>
    <CardMedia overlay={<CardTitle title={item.name} />}>
      <img src={item.image} alt="" />
    </CardMedia>
    <CardTitle title={`Цена: ${item.price} BYN`} />
    <CardText>{item.description}</CardText>
  </Card>
);
