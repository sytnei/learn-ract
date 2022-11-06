
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact'; 
import Course from './components/pages/Course';
import Leason from './components/pages/Leason';
import Login from './components/pages/Login';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

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
        <Header
          isLogged={isLogged}
          setPassword={setPassword}
        />
        <section className='section-main'>
          <Container>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/contact' element={<Contact />}></Route>
              <Route path="/course/:courseId" element={<Course />} ></Route>
              <Route path="/leason/:courseId/:leasonId" element={<Leason />} ></Route>
              <Route exact path='/login' element={< Login setPassword={setPassword} password={password} isLogged={isLogged} />}></Route>
            </Routes>
          </Container>
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
