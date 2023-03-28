import { useState, useEffect } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalProfile from '../Posts/ModelProfile';

export default function Profilecard(props) {

  const [showFlag, setShowFlag] = useState(false);

  const handleShow = () => {
    setShowFlag(true);
  }
  const handleClose = () => {
    setShowFlag(false);
  }

  useEffect(() => {
   
  }, []);

  return (
    <div>
      <Card className='my-4' sx={{ maxWidth: 345 }}>
        <img
          component='img'
          alt={props.name}
          height='140'
          src={props.pic? props.pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Bio: {props.bio}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Date of birth: {props.dob}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={handleShow}>
            Edit
          </Button>
        </CardActions>
      </Card>
      <ModalProfile pic={props.pic} bio={props.bio} dob={props.dob} name={props.name} id={props.id} showFlag={showFlag} handleClose={handleClose} setupdateUser={props.setupdateUser}/>
    </div>
  );

}