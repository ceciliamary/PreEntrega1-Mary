import React from "react";
import CountComponent from "../CountComponent/CountComponent";

import { height } from "@fortawesome/free-solid-svg-icons/faCartPlus";

const ItemListContainerComponent = ({ greeting}) => {
/*const customStyles = {
    color: "blue",
    fontSize: "2rem",
    margin: "auto",
    width: "100vh",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};  
    return <div style={customStyles}>{greeting}</div>;
};*/

return ( 
<div className="itemListContainer">
    {greeting}
    <CountComponent/>
</div>
);
};
export default ItemListContainerComponent;