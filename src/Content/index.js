import React from "react";
import ItemList from "./ItemList";
import ItemPage from "./ItemPage";
import { getCategories } from "../api";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentWillMount() {
    getCategories().then(categories => {
      this.setState({
        categories
      });
    });
  }
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <ul
            style={{
              paddingLeft: 10,
              listStyleType: "none"
            }}
          >
            {this.state.categories.map(category => (
              <li>
                <Link to={`/${category.name}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
          <div
            style={{
              paddingLeft: 240,
              paddingRight: 40
            }}
          >
            {this.state.categories.map((category, index) => {
              return (
                <div>
                  <Route
                    key={index}
                    path={`/${category.name}`}
                    exact={true}
                    render={props => (
                      <ItemList {...props} category={category} />
                    )}
                  />
                  <Route
                    key={index}
                    path={`/${category.name}/:itemId`}
                    component={ItemPage}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Router>
    );
  }
}
