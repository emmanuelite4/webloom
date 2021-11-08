import { URL_DASHBOARD, URL_TEAM } from "./navigations";

type MenuType = {
  title: string;
  path: string;
  icon: string;
};

export const menus: MenuType[] = [
  {
    title: "Dashboard",
    path: URL_DASHBOARD,
    icon: "dashboard",
  },
  {
    title: "My Team",
    path: URL_TEAM,
    icon: "team",
  },
  {
    title: "Task",
    path: "/task",
    icon: "task",
  },
  {
    title: "Calender",
    path: "/calender",
    icon: "calender",
  },
  {
    title: "Report",
    path: "/report",
    icon: "report",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "settings",
  },
];
