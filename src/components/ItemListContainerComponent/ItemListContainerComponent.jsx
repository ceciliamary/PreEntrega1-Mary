import React from "react";
import CountComponent from "../CountComponent/CountComponent";

import { height } from "@fortawesome/free-solid-svg-icons/faCartPlus";
/*

const myNums = [1, 2, 3, 4, 5, 6, 7];
const myNumsAfterMap = myNums.map(num =>{
    return(num + 2)
})
console.log(myNumsAfterMap)
return ( 
<div className="itemListContainer">
    {greeting}
    <CountComponent/>
</div>
);*/
const ItemListContainerComponent = ({ greeting}) => {
const myProducts =[
    {
        name: "Zapatilla Nike 2.8",
        description: "Zapatilla Nike 2.8 Unisex - Adultos",
        price: 200,
        stock: 10, 
        category: "Urban"
    }, 
    {
        name: "Zapatilla Adidas 3.5",
        description: "Zapatilla Adidas 3.5 Unisex - Adultos",
        price: 300,
        stock: 15, 
        category: "Deportivas"
    },
];
return <div className="itemListContainer">
        {myProducts.map((product, index) =>{
return(
    <div key={index}>
        <li>{product.name}</li>
        <li>{product.description}</li>
        <li>{product.price}</li>
        <li>{product.stock}</li>
        <li>{product.category}</li>
    </div>
);
})}
</div>
}
export default ItemListContainerComponent;