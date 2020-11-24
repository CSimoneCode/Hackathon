import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NewEvent from './pages/NewEventPage';
import VendorList from './pages/VendorList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/events/new" component={NewEvent} />
        <Route path="/vendors" component={VendorList} />
      </Switch>
    </div>
  );
}

export default App;
