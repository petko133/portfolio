import React from 'react';
import Banner from '../components/Layout/Home/Banner';
import About from '../components/Layout/Home/About';
import Projects from '../components/Layout/Home/Projects';
import Contacts from '../components/Layout/Home/Contacts';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Home;
