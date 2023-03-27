import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function ModalProfile(props) {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [img, setImg] = useState('');
  const [bio, setBio] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleImgChange = (event) => {
    setImg(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const updatePro = async (e) => {
    e.preventDefault();
    let obj = {
      userFullName: name,
      dateOfBirth: date,
      imageURL: img,
      bio: bio
    }


    const serverURl = `${process.env.REACT_APP_Backend_Deploy_link}updateprofil/${props.id}`
    const axiosRes = await axios.put(serverURl, obj);
    const newUser = axiosRes.data;
    props.setupdateUser(newUser);
    props.handleClose();
  }

  return (

    <Modal show={props.showFlag}>
      <div className="mx-3 my-3">
        <Modal.Header closeButton onHide={props.handleClose}>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>

        <Form onSubmit={updatePro}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="Name" defaultValue={props.name} onChange={handleNameChange} />
            <Form.Label>image URl</Form.Label>
            <Form.Control type="text" placeholder="Image" name="Img" defaultValue={props.pic} onChange={handleImgChange} />
            <Form.Label>Bio</Form.Label>
            <Form.Control type="text" placeholder="BIO" name="Bio" defaultValue={props.bio} onChange={handleBioChange} />
            <Form.Label>Birth date</Form.Label>
            <input id="startDate" name="Date" defaultValue={props.dob} onChange={handleDateChange} className="form-control" type="date" data-date="" data-date-format="DD MMMM YYYY" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

export default ModalProfile;
