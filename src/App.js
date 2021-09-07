/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { fetchAllCoins } from './redux/slices/coinsSlice';

function App() {
  // const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  const allItems = useSelector((state) => state.coins.entities);

  const allRoutes = () => allItems.map((coin) => (
    <Route key={coin.id} path={`/${coin.id}`}>
      <Detail name={coin.name} data={coin} />
    </Route>
  ));

  return (
    <AnimatePresence exitBeforeEnter initial="false">
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
