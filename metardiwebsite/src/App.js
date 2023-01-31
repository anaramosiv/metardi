
import './App.css';
import NavBar from 'components/Navbar';
import Header from 'components/header/Header';
import CardsProduct from 'components/CardsProduct/CardsProduct'
import MultiCarrousel from 'components/MultiCarrousel/MultiCarrousel'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quienes from 'components/Quienes/Quienes';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <Header/>
      </header>
      <CardsProduct/>
      <Quienes/>
      <MultiCarrousel/>
      <Footer/>
   
      
    </div>
  );
}

export default App;
