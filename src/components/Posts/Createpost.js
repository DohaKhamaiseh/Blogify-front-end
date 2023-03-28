import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Button from 'react-bootstrap/Button';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';

import Createpostmodal from './Createpostmodal';

export default function Createpost(props) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Card
                className='my-2 createpostcard'>
                <CardContent className='postcard'>
                    <div>
                        <img className="profileimage" src='https://i1.sndcdn.com/artworks-000224673758-y7imjr-t500x500.jpg'></img>
                    </div>
                    <Button onClick={handleShow} className='button'><EditIcon/>  What's on your mind?  </Button>
                </CardContent>
            </Card>
            <Createpostmodal show={show} handleClose={handleClose} useridgetter={props.id}/>
        </>
    )
}