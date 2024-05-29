import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";
import CountComponent from './components/CountComponent/CountComponent';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
  const isTrue = true;
    if (isTrue) {
      resolve([{
        id: 1, 
        name: "remera",
        descripcion: "Remera de algodon", 
        cantidad: 10, 
      },
    ]);
    } else {
      reject([]);
    }
  }, 3000);
  });

  console.log(myPromise);
  
  myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((err) => {
    console.log("termino el proceso");
  });

  return (
    <>
    <NavBarComponent/>
    <ItemListContainerComponent greeting="Bienvenidos al sitio de venta de Dulces de la Patagonia"/>
     
     <footer style={{color: "blue"}}>PIE DE PAGINA</footer>
     </>
  );
}

export default App
