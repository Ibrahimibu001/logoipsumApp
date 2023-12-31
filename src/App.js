import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
