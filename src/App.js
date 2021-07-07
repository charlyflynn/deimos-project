import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Landing from './Landing';
import RawDataTable from './RawDataTable';
import Visualisation from './Visualisation';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ViewPort = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <ViewPort>
          <Switch>
            <Route path="/visualisation">
              <Visualisation />
            </Route>
            <Route path="/data">
              <RawDataTable />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </ViewPort>
      </Container>
    </Router>
  );
}

export default App;
