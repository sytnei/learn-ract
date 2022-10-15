import './App.css';
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Courses from './components/pages/Courses';
import Login from './components/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



function App() {


  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (password === 'secret') {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [password]);



  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <Test/>
            <Navbar/> */}
          <Navigation 
            isLogged={valid}
            setPassword={setPassword}
          />



          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            {/* <Route exact path='/courses' element={< Courses />}></Route> */}
            <Route path="/courses" element={< Courses />} />
            <Route path="/courses/:courseId" element={< Courses />} />
            <Route exact path='/login' element={< Login setPassword={setPassword} password={password} valid={valid} />}></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
