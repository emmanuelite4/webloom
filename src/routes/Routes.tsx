import { FC } from "react";
import DashboardContainer from "../pages/Dashboard/DashboardContainer";
import { URL_DASHBOARD } from "../constants/navigations";

type Routes = {
  component: FC;
  path: string;
};

export const routes: Routes[] = [
  {
    component: DashboardContainer,
    path: URL_DASHBOARD,
  },
];
