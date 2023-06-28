import React from 'react'
import logo from "../../logo.png"
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from "react-icons/ai"

export default function Header() {
  return (
   <nav className='header'>

    <img src={logo} alt="logo" />
    <div className='link'>
      
    <Link to="/">Home</Link>

        <Link to="/Tvshows">TV Shows</Link>
        <Link to="/Movies">Movies</Link>
        <Link to="/Recentlyadded">Recently Added</Link>
        <Link to="/Mylist">My List</Link>
    </div>
    
    <AiOutlineSearch style={{color:"white"}}/>

   </nav>
  )
}
