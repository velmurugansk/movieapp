import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIKey } from '../apis/Movieapikey';

const Listmovies = () => {
  const [movielist, setMovielist] = useState([]);
  const [error, setError] = useState(null);

  const fetchmovieData = async () => {    
    const data = await axios("https://www.omdbapi.com/?apikey=ecba262b&s='movie'");             
      const response=data.data.Search      
      setMovielist(response);             
  }

  useEffect(() => {
    fetchmovieData()
  }, [])

  if (error) return <p>An error occurred</p>
  
  return (
    <div className='bg-gray-700 text-white h-screen px-20 py-10'>
      <ul>
        {movielist.map((movie) => (          
          <li key={movie.imdbID}>
          <img src={movie.Poster} alt="movieposter" />
          </li>
        ))}        
      </ul>
    </div>
  )
}

export default Listmovies