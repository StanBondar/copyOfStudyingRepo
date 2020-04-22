import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import CardBoard from "../pages/cardBoard/CardBoard";

const AppRoutes = (props) => {
  const { items, action } = props;

  return (
    <>
      <Switch>
        <Route exact path="/cart" render={(props) => <ShoppingCart {...props} action={action} />} />
        <Route
          exact
          path="/catalog"
          render={(props) => (
            <CardBoard {...props} items={items} action={action} />
          )}
        />
      </Switch>
    </>
  );
};

export default AppRoutes;
