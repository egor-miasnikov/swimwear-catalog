import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
// import FlatButton from "material-ui/FlatButton";

export default () => (
  <Card>
    <CardHeader title="БЕРУШИ ДЛЯ ПЛАВАНИЯ" />
    <CardMedia overlay={<CardTitle title="ERGO EARPLUG" />}>
      <img
        src="https://www.arenarussia.ru/images/catalog/200/ergo_earplug_9522310_a_1285711_1285715.jpg"
        alt=""
      />
    </CardMedia>
    <CardTitle title="Цена: 65 BYN" />
    <CardText>
      Беруши эргономичной формы. Мягкий уплотнитель из жидкого силикона – это
      безупречное закупоривание ушного канала. Форма берушей "с ножкой"
      позволяет легко их захватывать и использовать. Полая ножка из сжатого
      силикона для улучшения передачи звука во время плавания. Для удобства
      различия ножки берушей выполнены двух цветов: правая – розовая, левая –
      голубая.
    </CardText>
  </Card>
);
