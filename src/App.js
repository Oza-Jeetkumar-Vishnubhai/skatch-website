import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom'
import Test from './Components/Test';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Navbar /><Home/></>}/>
        <Route path='/abc' element={<><Test/></>}/>
      </Routes>
    </>
  );
}

export default App;
