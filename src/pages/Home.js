import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Volunteers from '../components/Volunteers';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <Header></Header>
        <Navigation></Navigation>
      </div>
      <Volunteers />
    </div>
  );
};

export default Home;