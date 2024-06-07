import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListContainerComponent.css";
import CountComponent from "../CountComponent/CountComponent";
import { Link } from "react-router-dom";
import { height } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import { getAllProducts } from "../../services/productsServices";


    const ItemListContainerComponent = ({ greeting }) => {

    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
    getAllProducts()
    .then((res) => setProducts(res.data.products))
    .catch((err) => console.log(err));
}, []);
return (  
<div className="itemListContainer">
    {products.map((product) => {
        return <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Link to={`/item/${product.id}`}>Ir al detalle</Link>
        </Card.Body>
      </Card>
    })}
</div>
);
};

export default ItemListContainerComponent;