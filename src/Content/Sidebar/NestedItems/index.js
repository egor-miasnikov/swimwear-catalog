import React, { Component } from "react";
import MenuItem from "material-ui/MenuItem";

// import { getItems } from "../../../api";

export default class NestedItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentWillReceiveProps(props) {
    console.log("props", props);
    // getItems(props.items).then(items => {
    //   console.log("items", items);
    //   this.setState({
    //     items
    //   });
    // });
  }

  render() {
    this.props.items = this.state.items;

    const nestedItems = this.state.items.map((item, index) => {
      console.log("item", item);
      return <MenuItem primaryText={item.name} />;
    });
    return null;
  }
}
