import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <>
    <NavBarComponent/>
    <ItemListContainerComponent greeting="Bienvenidos al sitio de venta de Dulces de la Patagonia"/>
     </>
  );
}

export default App
