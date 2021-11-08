import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import styled from "@emotion/styled";
import { COLOR_BACKGROUND_ONE } from "./constants/styles";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Holder>
        <SideBar />
        <BodySection>
          <Header />
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
