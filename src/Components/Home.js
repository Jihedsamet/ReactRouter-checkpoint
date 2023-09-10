import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Home() {
const navigate= useNavigate()
  return (
    <>
    <div>

    <Button onClick={()=> navigate ('/MovieList')} >go</Button>

    </div> 
    </>
 )
}

export default Home