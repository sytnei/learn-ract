import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Courses from './components/pages/Courses';
import Posts from './components/pages/Posts';
import Login from './components/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

const App = () => {

  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (password === 'secret') {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [password]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header 
            isLogged={isLogged}
            setPassword={setPassword}
          />

          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route path="/courses" element={< Courses />} ></Route>
            <Route path="/courses/:courseId" element={< Courses />} ></Route>
            <Route path="/posts" element={< Posts />} ></Route>
            <Route path="/posts/:postId" element={< Posts />} ></Route>
            <Route exact path='/login' element={< Login setPassword={setPassword} password={password} isLogged={isLogged} />}></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
