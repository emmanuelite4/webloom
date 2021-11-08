import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "./Routes";
import { URL_DASHBOARD } from "../constants/navigations";

export const Routes = () => {
  return (
    <Switch>
      {/*<Redirect from="/" to={URL_DASHBOARD} />*/}
      <Route path={"/"} exact>
        <Redirect to={URL_DASHBOARD} />
      </Route>
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
