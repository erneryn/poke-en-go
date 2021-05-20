import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landing'
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App" data-test="app-component">
      <LandingPage/>
    </div>
    </Provider>
  );
}

export default App;
