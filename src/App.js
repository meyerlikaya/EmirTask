import {
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';
import Home from './pages/Home'
import Detail from './pages/Detail'
import FavoritesPage from './pages/FavoritesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={`/detail/:name`} element={<Detail />} />
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes> 
    </Router>
    </>
  );
}

export default App;

