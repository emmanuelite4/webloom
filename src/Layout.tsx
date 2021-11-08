import SideBar from "./components/SideBar/SideBar";
import { Routes } from "./routes";
import styled from "@emotion/styled";
import { COLOR_BACKGROUND_ONE } from "./constants/styles";
import Header from "./components/Header/Header";
import { useState } from "react";

function Layout() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <Holder>
      <SideBar smShow={menu} toggleMenu={toggleMenu} />
      <BodySection>
        <Header toggleMenu={toggleMenu} />
        <Routes />
      </BodySection>
    </Holder>
  );
}

export default Layout;

const Holder = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${COLOR_BACKGROUND_ONE};
`;

const BodySection = styled.div`
  height: 100%;
  flex: 1;
  overflow: auto;
`;
