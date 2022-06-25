import logo from './logo.svg';
import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { yellow } from '@mui/material/colors';
import { useState } from 'react';
import { margin } from '@mui/system';
import { BasicForm } from './BasicForm';
import { MovieList } from './MovieList';
import { AddMovie } from './MovieList';
import { MovieDetails } from './MovieDetails';
import { Addcolor } from './Addcolor';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { light } from '@mui/material/styles/createPalette';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function App() {
  // const names=["abc","def","ghi"];
  const [mode,setMode]=useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  const initial_movieList=[

    {
    
    "title": "RRR",
    "pic":
    "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "content": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
    "title": "Iron man 2",
    "pic": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "content": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    
    "title": "No Country for Old Men",
    "pic": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "content": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
    
    "title": "Jai Bhim",
    "pic": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "content": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    
    "title": "The Avengers",
    "rating": 8,
    "content": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "pic": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
    
    "title": "Interstellar",
    "pic": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "content": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
    
    "title": "Baahubali",
    "pic": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "content": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
    
    "title": "Ratatouille",
    "pic": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "content": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
    ]
            // const initial_movieList=[...movieList]
            const navigate=useNavigate();
  const [movieList,setMovieList]=useState(initial_movieList);
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight:"100vh",borderRadius:0}} >
      <div>
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"></img> */}
     {/* <h1>Welcome to React Router!</h1> */}
     <AppBar position="static">
      <Toolbar>
          <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>
          <Button color="inherit" onClick={()=>navigate('/colorgame')}>Color Game</Button>
          <Button color="inherit" onClick={()=>navigate('/movies')}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate('/movies/add')}>Add Movie</Button>
          <Button color="inherit" 
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={()=>setMode(mode==="light" ? 'dark' : 'light')}>{mode==="light" ? 'dark' : 'light'} Mode</Button>
          </Toolbar>  
      </AppBar>
      <div className='route-container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colorgame" element={<Addcolor />} /> 
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/basicform" element={<BasicForm />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/films" element={<Navigate replace to="/movies" /> } />
        <Route path="/movies/:id" element={<MovieDetails movieList={movieList}/>} /> 

        <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />

        <Route path="*" element={<Navigate replace to="/404" /> } />
      </Routes>
      </div>
   

    {/* <MovieList movieList={movieList} setMovieList={setMovieList} /> */}
    
   
    </div>
    {/* <Addcolor />   */}
    </div>
    </Paper>
    </ThemeProvider>
  );
}
// export default App;
function Home(){
  return <h1>Hello Welcome to Movie List</h1>
}
export function Colorbox({color}){
  const styles={
    backgroundColor:color,
    height:"25px",
    width:"200px",
    marginTop:"20px"
  
  }
  return(
    <div style={styles}></div>
  )
}


function NotFound(){
  return <h1>404 Not Found</h1>
}


