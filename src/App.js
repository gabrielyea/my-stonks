import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  useEffect(() => {
  }, []);

  const allItems = useSelector((state) => state.coins.entities);

  const allRoutes = () => allItems.map((coin) => (
    <Route key={coin.id} path={`/detail/${coin.id}`}>
      <Detail key={coin.id} name={coin.name} data={coin} />
    </Route>
  ));

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {allRoutes()}
        </Switch>
      </Router>
    </AnimatePresence>
  );
}

export default App;
