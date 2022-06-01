import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Navbar /><Home/></>}/>
      </Routes>
    </>
  );
}

export default App;
