import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import styled from "@emotion/styled";

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
  & > :nth-child(2) {
    flex: 1;
  }
`;
