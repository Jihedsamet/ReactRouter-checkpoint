import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieApi } from "../Data/MovieApi";
import Button from 'react-bootstrap/Button';

function MovieDetails() {
  
  const { id } = useParams();
  const movie = MovieApi.find((movie) => movie.id === id);
  const navigate= useNavigate()
  return <>
    <Button onClick={()=> navigate ('/')}  variant="danger">BacktoList</Button>
    

  <h1>{movie.title}</h1>
  <h2>{movie.description}</h2>
  <img text="First slide" src={movie.imgUrl}  alt='movie'/>
  <h3>{movie.date}</h3>
  

  
  </>;
}

export default MovieDetails;
