import './App.css';
import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/Home';
//Router traido desde react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      
      <Header/>
      <div className='container container-fluid'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
        </Routes>


      </div>
      
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;

