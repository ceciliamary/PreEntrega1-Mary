import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";
import CountComponent from './components/CountComponent/CountComponent';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    <>
    <NavBarComponent/>
    <ItemListContainerComponent greeting="Bienvenidos al sitio de venta de Dulces de la Patagonia"/>
     
     <footer style={{color: "blue"}}>PIE DE PAGINA</footer>
     </>
  );
}

export default App
