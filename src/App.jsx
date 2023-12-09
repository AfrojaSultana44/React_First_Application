import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import About from './About.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <About />
      <Home></Home>
    </div>
  );
}

export default App;
