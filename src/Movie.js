import * as React from "react";
import Button from '@mui/material/Button';
import { Counter } from './Counter';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { height } from "@mui/system";

export function Movie({pic,title,rating,content,id}
  ) {
    const navigate=useNavigate();
const [show,setShow]=useState(true);
  const styles = {
    color: rating> 8 ? "green" : "red",
  };
  // console.log("id is "+id);
  return (
    <Card className='moviedetails'sx={{height:"min-content"}}>

      <img className='poster' src={pic} alt={title} />
      <CardContent>
<div className="moviespecs">
      <h2 className='title'>{title}
      <IconButton aria-label="toggle-summary" color="primary" onClick={()=>setShow(!show)}>
  {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
</IconButton>
      <IconButton aria-label="info" color="primary" onClick={()=>navigate(`/movies/${id}`)}>
  <InfoIcon />
</IconButton>
      </h2><p style={styles} className='rating'>⭐ {rating}</p>
      </div>
      {/* <Button variant="outlined" onClick={()=>setShow(!show)}>Hide Content</Button> */}
     
      {/* <Button variant="outlined" onClick={()=>navigate(`/movies/${id}`)}>Info</Button> */}
      
     {show ? <p className='content'>{content}</p>:null}
     </CardContent>
     <CardActions>
      <Counter/>
      </CardActions>
    </Card>
    // <h1>Hello, {props.name}</h1>
  );
}


