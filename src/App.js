import React from 'react'
import images from './components/images';
import { Header, Hero, Body } from './components';
import './App.css';

function App() {
  return (
    <div className="App" style={{
      background: '#0A0B1A'
    }}>
      <div className='Head' style={{
        backgroundImage: `url(${images.Img})`
      }}>
        <Header />
        <Hero />
      </div>
      <Body />
    </div>
  );
}

export default App;
