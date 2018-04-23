import React from "react";
import ItemCard from "./ItemCard";
import { getItems } from "../../api";

import { GridList } from "material-ui/GridList";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
};

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.category = props.category;
  }
  componentWillMount() {
    getItems(this.category.items).then(items => {
      this.setState({
        items
      });
    });
  }
  render() {
    return (
      <div style={styles.root}>
        <h1>{this.props.category.name}</h1>
        <GridList cellHeight={"auto"} padding={10}>
          {this.state.items.map(item => (
            <ItemCard item={item[0]} categoryName={this.category.name} />
          ))}
        </GridList>
      </div>
    );
  }
}
