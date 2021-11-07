import styled from "@emotion/styled";
import { COLOR_BACKGROUND_TWO } from "../../constants/styles";
import Logo from "../../assets/images/logo.svg";
import { Text28 } from "../shared/Text/Text";
import SideBarListItem from "./SideBarListItem";
import Button from "../shared/Button/Button";

type MenuType = {
  title: string;
  path: string;
  icon: string;
};

const menus: MenuType[] = [
  {
    title: "Dashboard",
    path: "dashboard",
    icon: "dashboard",
  },
  {
    title: "My Team",
    path: "my-team",
    icon: "team",
  },
  {
    title: "Task",
    path: "task",
    icon: "task",
  },
  {
    title: "Calender",
    path: "calender",
    icon: "calender",
  },
  {
    title: "Report",
    path: "report",
    icon: "report",
  },
  {
    title: "Settings",
    path: "settings",
    icon: "settings",
  },
];

function SideBar() {
  return (
    <Holder>
      <HeaderSection>
        <LogoImage src={Logo} alt={"Only1"} />
        <Text28>ONLY1</Text28>
      </HeaderSection>
      <BodySection>
        {menus.map((menu) => (
          <SideBarListItem title={menu.title} icon={menu.icon} />
        ))}
      </BodySection>
      <Button icon={<span className="icon-logout" />}>Logout</Button>
    </Holder>
  );
}

export default SideBar;

const Holder = styled.div`
  width: 224px;
  background-color: ${COLOR_BACKGROUND_TWO};
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  margin-right: 13px;
`;

const BodySection = styled.div`
  flex: 1;
  align-self: stretch;
  margin-top: 60px;
`;
