import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Info from './components/Info';
import RawDataTable from './components/RawDataTable';
import Orbit from './Orbit/Orbit';
import Titan from './Titan';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #030303;
`;

const ViewPort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <ViewPort>
          <Switch>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/data">
              <RawDataTable />
            </Route>
            <Route path="/orbit">
              <Orbit />
            </Route>
            <Route path="/">
              <Titan />
            </Route>
          </Switch>
        </ViewPort>
      </Container>
    </Router>
  );
}

export default App;
