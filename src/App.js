
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cruises from './pages/Cruises';
import HoneyMoon from './pages/HoneyMoon';
import GroupTour from './pages/GroupTour';
import Packages from './pages/Packages';
import Wedding from './pages/Wedding';
import Company from './pages/Company';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminPackages from './pages/AdminPackages';
import AdminSubmissions from './pages/AdminSubmissions';
import NotFound from './pages/NotFound';

import Appbar from './components/js/Appbar';
import Topbar from './components/js/Topbar'
import FullPackages from './components/js/FullPackages';
import ShowGtours from './components/js/ShowGtours';
import AIAssistant from './components/js/AIAssistant';

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
      <Route path='/admin/login' element={<AdminLogin/>}></Route>
      <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
      <Route path='/admin/packages' element={<AdminPackages/>}></Route>
      <Route path='/admin/submissions' element={<AdminSubmissions/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <AIAssistant/>
   </>
  );
}

export default App;
