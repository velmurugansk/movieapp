import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Listmovies = () => {
  const [movielist, setMovielist] = useState([]);
  const [error, setError] = useState(null);

  const fetchmovieData = () => {
    axios("http://www.omdbapi.com/?i=tt3896198&apikey=ecba262b")
      .then(response => {
        setMovielist(response.data);
        setError(null);
      }).catch(setError);
  }

  useEffect(() => {
    fetchmovieData()
  }, [])

  if (error) return <p>An error occurred</p>
  
  return (
    <div className='bg-gray-700 text-white h-screen px-20 py-10'>
      <ul>
        <li key={movielist.title}>
            <img src={movielist.Poster} alt="movieposter" />
        </li>
      </ul>
    </div>
  )
}

export default Listmovies