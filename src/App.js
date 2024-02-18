import './App.css';
import Router from "./Router";
import UserProvider from './providers/UserProvider';
import Nav from './components/Nav';

const App = () => {
    return (
      <UserProvider>
        <Nav />
        <Router />
      </UserProvider>
    );
}

export default App;

