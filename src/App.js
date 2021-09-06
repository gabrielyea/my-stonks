import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path="/missions">
              <Missions />
            </Route>
            <Route path="/my-profile">
              <Profile />
            </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
