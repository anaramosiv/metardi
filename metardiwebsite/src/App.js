
import './App.css';
import NavBar from './components/Navbar';
import Header from './components/header/Header';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <Header/>
      </header>
    </div>
  );
}

export default App;
