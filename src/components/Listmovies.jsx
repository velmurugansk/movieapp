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
    <div className='bg-gray-700 text-white  px-20 py-10'>
      <div className='flex flex-row flex-wrap'>
        {movielist.map((movie) => (          
          <div className='w-1/4' key={movie.imdbID}>
          <img src={movie.Poster} className='h-60 w-60' alt="movieposter" />
          <p>{movie.Title}</p>
          </div>
        ))}        
      </div>
    </div>
  )
}

export default Listmovies