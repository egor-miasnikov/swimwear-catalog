import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import NestedItems from "./NestedItems";

export default ({ categories }) => (
  <div>
    {console.log(categories)}
    <Drawer width={200} open={true}>
      {categories &&
        categories.map((category, index) => (
          <MenuItem
            key={index}
            autoGenerateNestedIndicator={true}
            primaryText={category.name}
            primaryTogglesNestedList={true}
            nestedLevel={1}
            // nestedItems={}
          >
            {/* <NestedItems items={category.items} /> */}
          </MenuItem>
        ))}
    </Drawer>
  </div>
);
