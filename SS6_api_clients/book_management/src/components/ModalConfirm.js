import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalConfirm = (props) => {
  const {show, handleClose} = props;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;
