import * as React from "react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { borderRadius } from "@mui/system";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  // const styles={
  //   borderRadius:50%;
  // }
  let initialvalue = 0;
  const [like,setLike]= useState(initialvalue);
  const [dislike,setDisLike]= useState(initialvalue);
  return (<div>
       <IconButton color="primary" variant="text" onClick={()=>{setLike(like+1);
    }}> <Badge badgeContent={like} color="primary">👍</Badge></IconButton>
     <IconButton color="error" variant="text" onClick={()=>{setDisLike(dislike+1);
    }}> <Badge badgeContent={dislike} color="error">👎</Badge></IconButton>
    </div>);
}
