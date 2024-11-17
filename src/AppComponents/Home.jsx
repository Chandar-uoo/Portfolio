import React from 'react'
import myImage from './assets/FB_IMG_1687234429213.jpg'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate();
  const handleNav = ( )=> {
    navigate("/contact")
  }
  return (
  <>
  <div className="HomeContainer">
    <img src={myImage} alt="" />
   <h1>Hi</h1>
   <h2> I'm chandru.</h2>
    <h2>Front end developer <h6>React developer</h6></h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, officiis! </p>
    <button onClick={handleNav}> contact me </button>
  </div>
  </>
  )
}
