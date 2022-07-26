import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './components/Home';
function App() {
  

  return (
    <div className="text-2xl ">
         <Router>
        <Routes>
          <Route exact path='/' element={< Login />}></Route>
          <Route exact path='/Login' element={< Login />}></Route>
          <Route exact path='/Signup' element={< Signup />}></Route>
          <Route exact path='/Home' element={< Navbar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;