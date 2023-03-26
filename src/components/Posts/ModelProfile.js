import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function ModalProfile(props) {
    function handleSave() {
        props.handleClose();
            
    }
  return (
    
    <Modal  show={props.showFlag}>
        <div className="mx-3 my-3">
      <Modal.Header closeButton onHide={props.handleClose}>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
          <Form.Label>image URl</Form.Label>
          <Form.Control type="text" placeholder="Image" />
          <Form.Label>Bio</Form.Label>
          <Form.Control type="text" placeholder="BIO" />
          <Form.Label>Birth date</Form.Label>
          <input id="startDate" className="form-control" type="date" data-date="" data-date-format="DD MMMM YYYY" />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>
          Save changes
        </Button>
      </Form>
    </div>
    </Modal>
  );
}

export default ModalProfile;
