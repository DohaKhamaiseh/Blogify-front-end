import { useState, useEffect } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalProfile from '../Posts/ModelProfile';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profile.css';

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
    <div className="my-4">
      <div className="card">
        <div className="cover-photo">
          <img
            component='img'
            alt='green iguana'
            height='140'
            src={props.pic}
            className="profile"
          />
        </div>
        <h3 className="profile-name"> {props.name}</h3>
        <p className="about"> Bio: {props.bio} <br></br>  Date of birth: {props.dob.substring(0, 10)} </p>
        <CardActions>
          <Button size='small' onClick={handleShow}>
            <FontAwesomeIcon icon={faUserPen} />
          </Button>
        </CardActions>

        <ModalProfile pic={props.pic} bio={props.bio} dob={props.dob} name={props.name} id={props.id} showFlag={showFlag} handleClose={handleClose} setupdateUser={props.setupdateUser} />
      </div>
    </div>
  );
}