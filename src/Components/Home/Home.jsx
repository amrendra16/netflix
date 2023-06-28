import React, { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
// import {Biplay} from "react-icons/bi";
import { FaPlay } from 'react-icons/fa';

import{AiOutlinePlus} from "react-icons/ai"

const ApiKey = '8c612c0f3fcf72c15e3efe890d05fc78';
const Url = 'https://api.themoviedb.org/3';
const ImgUrl="https://image.tmdb.org/t/p/original"
const upcoming = 'upcoming';
const nowplaying ="now_playing";
const toprated="top_rated";
const popular="popular";



const Card = ({ img }) => {
  return <img className='card' src={img} alt='cover' />;
};




const Row = ({ title, arr = [] }) => {
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div>
        {arr.map((item,index) => (
          <Card img={`${ImgUrl}/${item.poster_path}`} key={index} />
        ))}
      </div>
    </div>
  );
};




const Home = () => {

const [upcomingMovie,setupcomingMovie]=useState([])
const [nowplayingMovie, setnowplayingMovie]=useState([])
const[topratedMovie,settopratedMovies]=useState([])
const [popularMovie,setpopularMovies]=useState([])

  useEffect(() => {
    const upcomingData = async () => {
     
        const { data:{results} } = await axios.get(`${Url}/movie/${upcoming}?api_key=${ApiKey}`);
       
       setupcomingMovie(results)
     
     
    };


    const nowplayingData = async () => {
     
      const { data:{results} } = await axios.get(`${Url}/movie/${nowplaying}?api_key=${ApiKey}`);
     
     setnowplayingMovie(results)
   
   
  };

  const topratedData =async ( )=>{
  
    const{data:{results}}=await axios.get(`${Url}/movie/${toprated}?api_key=${ApiKey}`);
    settopratedMovies(results)
  }

  const popularData =async()=>{
    const { data:{results} } = await axios.get(`${Url}/movie/${popular}?api_key=${ApiKey}`);
    setpopularMovies(results)

    
  }




  upcomingData();
  nowplayingData();
  topratedData();
  popularData();

  }, []);




  

  return (
    <section className='home'>

      
      <div className='banner'
       style={{backgroundImage:popularMovie[0]?`url(${`${ImgUrl}/${popularMovie[0].poster_path}`})`:"black"
    }}>
   

{
  popularMovie[0] &&(

    <h1>{popularMovie[0].original_title}</h1>

  )
}
{
  popularMovie[0] &&(
    <p>{popularMovie[0].overview}</p>
  )
}

<div>
<button><FaPlay/>Play </button>
<button>My List<AiOutlinePlus /></button>
</div>

</div>





      <Row title={'Upcoming Movies'}  arr={upcomingMovie}/>
      <Row title={'Now Playing Movies'} arr={nowplayingMovie}/>
      <Row title={'Top Rated Movies'} arr={topratedMovie}/>
      <Row title={'Popular Movies'} arr={popularMovie}/>
     
     
    </section>
  );
};

export default Home;
