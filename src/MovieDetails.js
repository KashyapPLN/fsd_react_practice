import * as React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  const navigate = useNavigate();
  return (<div>
    <div className="trailer">
      <h1>{movie.title}</h1>
      <iframe width="1500" height="650" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <Button variant="outlined" onClick={() => navigate(-1)}><ArrowBackIosIcon />Back</Button>
  </div>
  );
}
