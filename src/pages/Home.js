import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default Home;