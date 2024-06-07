
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";
import CountComponent from './components/CountComponent/CountComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoutes from "./routes/MainRoutes";
import ItemDetailsContainer from "./pages/ItemDetailsContainer";

function App() {

  return (
    <>
    <MainRoutes />
    
    <footer style={{color: "blue"}}> pie pagina </footer>
    </>
    

  );
}

export default App
