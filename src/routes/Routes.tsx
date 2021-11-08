import { FC } from "react";
import DashboardContainer from "../pages/Dashboard/DashboardContainer";
import { URL_DASHBOARD, URL_TEAM } from "../constants/navigations";
import TeamContainer from "../pages/Team/TeamContainer";

type Routes = {
  component: FC;
  path: string;
};

export const routes: Routes[] = [
  {
    component: DashboardContainer,
    path: URL_DASHBOARD,
  },
  {
    component: TeamContainer,
    path: URL_TEAM,
  },
];
