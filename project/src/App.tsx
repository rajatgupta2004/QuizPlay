import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Learn from './pages/Learn';
import Profile from './pages/Profile';
export default function App(){
  
  return (<BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Learn></Learn>}></Route>
      <Route path ="/profile" element ={<Profile></Profile>}></Route>
    </Routes>
  </BrowserRouter>
  )
}