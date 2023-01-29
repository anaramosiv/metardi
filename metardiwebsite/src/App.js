
import './App.css';
import NavBar from 'components/Navbar';
import Header from 'components/header/Header';
import CardsProduct from 'components/CardsProduct/CardsProduct'
import MultiCarrousel from 'components/MultiCarrousel/MultiCarrousel'

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <Header/>
      </header>
      <CardsProduct/>
      <MultiCarrousel/>
   
      
    </div>
  );
}

export default App;
