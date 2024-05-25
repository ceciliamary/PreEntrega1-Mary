import React, { Children } from 'react'

import NavBarComponent from '../NavBarComponent/NavBarComponent'
const MainLayout = () => {
  return (
    <>
     <NavBarComponent/> 
     {Children}
     <footer style={{color: "blue"}}>PIE DE PAGINA</footer>
    </>
  )
}

export default MainLayout
