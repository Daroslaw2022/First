import './App.css';
import Home from './pages/home'
import First from './pages/first'
import Second from './pages/Second'


import { BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
<BrowserRouter>
  <Routes>
    <Route path={'/'} element = {<Home/>}/> 
    <Route path={'/first'} element = {<First/>}/> 
    <Route path={'/second'} element = {<Second/>}/> 

  </Routes>
</BrowserRouter>
  );
}

export default App;
