import React from "react";
import GridList from "./GridList";
import SideBar from "./Sidebar";
import { getCategories, getItems } from "../api";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentWillMount() {
    getCategories().then(categories => {
      categories.forEach(category => {
        return getItems(category.items).then(items => {
          category.items = items;
        });
      });
      this.setState({
        categories
      });
    });
  }
  render() {
    return (
      <div>
        <SideBar items={this.state.items} categories={this.state.categories} />
        <div
          style={{
            paddingLeft: 240,
            paddingRight: 40
          }}
        >
          <h1>Content</h1>
          <GridList />
        </div>
      </div>
    );
  }
}
