import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Route, Routes } from 'react-router-dom';

const HatsPages = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/hats' Component={HatsPages} /> 
      </Routes>
    </div>
  );
}

export default App;
