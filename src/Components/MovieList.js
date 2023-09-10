import React from 'react'
import MovieCard from './MovieCard';
import { useState } from 'react';
import { MovieApi } from "../Data/MovieApi";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function MovieList() {
  const navigate =useNavigate()
  const [Movies, setMovies]= useState(MovieApi)
  return (
<>
<Button onClick={()=> navigate ('/')} >GOBACK</Button>
{Movies.map((movie,index)=> (
    <MovieCard
        key={index}
        id={movie.id}
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl} 
          />
  
    ))}
    </>
  )
}

export default MovieList