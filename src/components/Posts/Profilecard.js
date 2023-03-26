import { useState } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalProfile from '../Posts/ModelProfile';

export default function Profilecard() {
  
  const user = {
    name: "Name",
    email: "user42@example.com"
  };

 
  const [showFlag,setShowFlag] = useState(false);
//   const [clickedUser,setClickedMovie]= useState({});
  const handleShow = ()=>{
    //   setClickedMovie(props.user);

      setShowFlag(true);

  }
  const handleClose = ()=>{
      setShowFlag(false);

  }
  return (
    <div>
      <Card className='my-4' sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='140'
          image='/static/images/cards/contemplative-reptile.jpg'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {user.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            bio
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            date of birth
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={handleShow}>
            Edit
          </Button>
        </CardActions>
      </Card>
      <ModalProfile user={user} showFlag={showFlag} handleClose={handleClose}/>
    </div>
  );
}
