import React, { useEffect } from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'


const Home = () => {
    useEffect(() =>{
    document.title = "Home";
    }, [])
  return (
    <>
     <ItemListContainerComponent/> 
     
    </>
  )
}

export default Home
