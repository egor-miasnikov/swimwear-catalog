import React from "react";
import ItemCard from "../ItemCard";
import { GridList, GridTile } from "material-ui/GridList";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
};

export default () => (
  <div style={styles.root}>
    <GridList cellHeight={"auto"} padding={10} cols={4}>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </GridList>
  </div>
);
