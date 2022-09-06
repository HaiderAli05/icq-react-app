// importing required packages and components
import React from 'react';
import underConstructionPic from './assets/underconstruction.jpg';
import './Homepage.css';



// define Homepage and use required components in it
const Homepage = () => {
  return (
    <div>
      <br />
      <center>
        <h1>HomePage</h1>
        <br />
        <img src={underConstructionPic} alt="underConstructionPic" className='underConst' />
      </center>
      <br />
    </div>
  )
}



// exporting Homepage component as default
export default Homepage