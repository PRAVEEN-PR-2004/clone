// App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cruises from './pages/Cruises';
import HoneyMoon from './pages/HoneyMoon';
import GroupTour from './pages/GroupTour';
import Packages from './pages/Packages';
import Wedding from './pages/Wedding';
import Company from './pages/Company';

import Appbar from './components/Appbar';
import Topbar from './components/Topbar'
import FullPackages from './components/FullPackages';
import ShowGtours from './components/ShowGtours';

function App() {
  return (
    <>
    <Topbar/>
    <Appbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/company' element={<Company/>}></Route>
      <Route path='/cruises' element={<Cruises/>}></Route>
      <Route path='/grouptour' element={<GroupTour/>}></Route>
      <Route path='/packages' element={<Packages/>}></Route>
      <Route path='/wedding' element={<Wedding/>}></Route>
      <Route path='/honeymoon' element={<HoneyMoon/>}></Route>
      <Route path='/contact/:city' element={<Contact/>}></Route>
      <Route path='/fullpackage/:id' element={<FullPackages/>}></Route>
      <Route path='/showgrouptour/:id' element={<ShowGtours/>}></Route>
    </Routes>
   </>
  );
}

export default App;
