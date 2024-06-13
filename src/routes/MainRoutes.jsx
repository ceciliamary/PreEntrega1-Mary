import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ItemDetailsContainer from '../pages/ItemDetailsContainer';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import EventPage from '../pages/EventPage';

const MainRoutes = () => {
  return (
    <Router>
        <NavBarComponent />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/item/:id' element={<ItemDetailsContainer />}/>
        <Route path='/eventos/fantasticos' element={<EventPage />} />
        </Routes>
    </Router>
  );
};

export default MainRoutes;

