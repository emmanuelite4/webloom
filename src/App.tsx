import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import styled from "@emotion/styled";
import { COLOR_BACKGROUND_ONE } from "./constants/styles";

function App() {
  return (
    <Router>
      <Holder>
        <SideBar />
        <Routes />
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
  & > :nth-child(2) {
    flex: 1;
  }
`;
