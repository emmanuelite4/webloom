import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import styled from "@emotion/styled";
import { COLOR_BACKGROUND_ONE } from "./constants/styles";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);
  const toggleMenu = () => {
    setState((prev) => !prev);
  };
  return (
    <Router>
      <Holder>
        <SideBar smShow={state} toggleMenu={toggleMenu} />
        <BodySection>
          <Header toggleMenu={toggleMenu} />
          <Routes />
        </BodySection>
      </Holder>
    </Router>
  );
}

export default App;

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
