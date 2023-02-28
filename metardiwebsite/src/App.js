
import './App.css';
import NavBar from 'components/NavBar/NavBar';
import Header from 'components/header/Header';
import CardsProduct from 'components/CardsProduct/CardsProduct'
import MultiCarrousel from 'components/MultiCarrousel/MultiCarrousel'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quienes from 'components/Quienes/Quienes';
import Footer from 'components/Footer/Footer';
import WhatsappLogo from 'components/WaLogo/WhatsappLogo';




function App() {
  return (
    <div className="App">  
        <NavBar/>
        <Header/>
    
      <CardsProduct/>
      <Quienes/>
      <MultiCarrousel/>
      <WhatsappLogo/>
      <Footer/>
   
   
      
    </div>
  );
}

export default App;
