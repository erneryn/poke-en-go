import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landing'
import DetailPage from './pages/detailpage'
import MylistPage from './pages/mylistpage'
import { Provider } from 'react-redux';
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div data-test="app-component">
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route path="/detail/:pokemon">
            <DetailPage/>
          </Route>
          <Route path="/mypokemonlist">
            <MylistPage/>
          </Route>
        </Switch>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
