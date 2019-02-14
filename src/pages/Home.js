import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Formation } from '../components/Formation';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Formation />
      <Footer />
    </div>
  )
}

export default Home;