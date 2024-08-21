import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/errorpage/errorpage.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={HomePage} errorElement={<ErrorPage/ >}/>
        <Route path='shop' Component={ShopPage} errorElement={<ErrorPage/ >} /> 
      </Routes>
    </div>
  );
}

export default App;
