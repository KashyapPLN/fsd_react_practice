import * as React from "react";
import Button from '@mui/material/Button';
import { Movie } from './Movie';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

// function Addmovie({movie_details,index}){
//   const initial_movieList=[...movie_details]
//   const [movie,setMovie]= useState("");
//   const [movieList,setMovieList]=useState(initial_movieList);
//     return(
//     <div>
//     <input value={title} onChange={(event)=>{setMovie(event.target.value)}}placeholder='Add Movie Title'/>
//     <input value={rating} onChange={(event)=>{setMovie>(event.target.value)}}placeholder='Add Movie Rating'/>
//     <input value={content} onChange={(event)=>{setMovie(event.target.value)}}placeholder='Add Movie Content'/>
//     <input value={pic} onChange={(event)=>{setMovie(event.target.value)}}placeholder='Add Movie Pic'/>
//     <button onClick={()=>{setMovieList([...initial_movieList,movie])}}>add movie</button>
//     {movieList.map((mv,index)=>(<Moviebox key={index} title={mv.title} rating={mv.rating} content={mv.content}/>))}
//     </div>
//   );
// }
// // function Moviebox({pic,title,rating,content}){
// // const details={
// //   pic:pic,
// //   title:title,
// //   rating:rating,
// //   conetent:content
// // }
// // }
export function MovieList({ movieList, setMovieList }) {

  
  return (<div>
    
    <div className="MovieList">
      {movieList.map((movie_details, index) => <Movie key={index} id={index} pic={movie_details.pic} title={movie_details.title} rating={movie_details.rating} content={movie_details.content} />)}
    </div>
  </div>);

}
export function AddMovie({movieList,setMovieList}){
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return(
    <div className='add-movie-form'>
      <TextField id="standard-basic" label="Movie Name" variant="standard" onChange={(event) => { setName(event.target.value); }} />

      <TextField id="standard-basic" label="Poster" variant="standard" onChange={(event) => { setPoster(event.target.value); }} />
      <TextField id="standard-basic" label="Rating" variant="standard" onChange={(event) => { setRating(event.target.value); }} />
      <TextField id="standard-basic" label="Summary" variant="standard" onChange={(event) => { setSummary(event.target.value); }} />

      <Button variant="outlined" onClick={() => {
        const newMovie = {
          title: name,
          pic: poster,
          rating: rating,
          content: summary
        };
        setMovieList([...movieList, newMovie]);
      }}>Add Movie</Button>

    </div>
  )
}
