import React from 'react';
import Navbar from './Navbar';
import Listmovies from './Listmovies';
import { useState } from 'react';

const Home = () => {
  const [searchmovie, setSearchmovie] = useState('harry');
  return (
    <div>
      <Navbar searchmovie={searchmovie} setSearchmovie={setSearchmovie} />
      <Listmovies searchmovie={searchmovie} />
    </div>
  )
}

export default Home