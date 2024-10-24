import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About'
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Website from './components/website/website';

function App() {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Project />
      <Website />
      <Contact />
    </main>
    </>
  );
}

export default App;