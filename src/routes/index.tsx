import { Route, Switch } from "react-router-dom";
import { routes } from "./Routes";

export const Routes = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={true}
        />
      ))}
    </Switch>
  );
};

// export Routes;
