import './App.css';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import { Home } from './components/home/homePage/home';
import { Auth } from './components/auth/auth';
import { Container } from '@material-ui/core';
import { RestuarantRegistration } from './components/restuarantRegistration/RestuarantRegistration';
import { Dashboard } from './components/dashboard/dashboard';

function App() {
  return (
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/restaurantRegistration' element={<RestuarantRegistration />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
   </BrowserRouter>

  );
}


export default App;
