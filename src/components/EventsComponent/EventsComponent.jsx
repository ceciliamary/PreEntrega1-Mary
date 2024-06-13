import React from 'react'

const handleClick = () => {
    alert("Click dos");
}

const EventsComponent = () => {
  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: 'center', justifyContent: "center"}}>
      <button onClick={() => {
        alert("Bienvenido");
      }}>Click me!</button>
      <button onClick={handleClick}>Click me!</button>
      <input type="text" placeholder='Dame un valor' id="myInput" onChange={(e) =>{
        console.log(e.target.value);
        if(e.target.value === "ceci") {
            alert("Hola Ceci");
        }
      }} />
    </div>
  )
}

export default EventsComponent
