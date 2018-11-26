import React, { Component } from 'react';
import Header from './components/header/Header';
import { Hero } from './sections/hero/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;
