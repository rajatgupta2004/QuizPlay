import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/login';
import Learn from './pages/Learn';
export default function App(){
  
  return (<BrowserRouter>
    <Routes>
      
      <Route path ="/login" element ={<Login></Login>}></Route>
      <Route path ="/" element ={<Dashboard></Dashboard>}></Route>
      <Route path ="/profile" element ={<Profile></Profile>}></Route>
      <Route path ="/learn" element ={<Learn></Learn>}></Route>
      <Route path ="/signup" element ={<Signup></Signup>}></Route>
      
    </Routes>
  </BrowserRouter>
  )
}