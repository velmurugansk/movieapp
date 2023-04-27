import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIKey } from '../apis/Movieapikey';

const Listmovies = (props) => {    
  let moviename = props.searchmovie ? props.searchmovie : "harry";
  const [movielist, setMovielist] = useState([]);
  const [error, setError] = useState(null);
  
  const fetchmovieData = async () => {    
    const data = await axios(`https://www.omdbapi.com/?apikey=${APIKey}&s='${moviename}'`);             
      const response=data.data.Response ? data.data.Search : [];     
      setMovielist(response);             
  }

  useEffect(() => {
    fetchmovieData(moviename);
  }, [moviename])


  if (error) return <p>An error occurred</p>
  
  return (
    <div className='bg-gray-700 text-white  px-20 py-10'>
      <div className='flex flex-row flex-wrap'>
        {movielist && movielist.map((movie) => (          
          <div className='w-1/4 mt-2.5' key={movie.imdbID}>
          <img src={movie.Poster} className='h-60 w-60' alt="movieposter" />
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          </div>
        ))}        
      </div>
    </div>
  )
}

export default Listmovies