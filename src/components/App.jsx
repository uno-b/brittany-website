import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, contactData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, contact, footer }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
