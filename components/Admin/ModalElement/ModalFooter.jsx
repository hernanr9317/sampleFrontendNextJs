import {Button, Modal} from 'react-bootstrap';
import {FaTrashAlt, FaSave, FaEdit} from 'react-icons/fa';

export const ModalFooter = ({editInfo, edit, handleDelete}) => {
  return (
    <Modal.Footer>
      <Button variant="primary" style={{display: 'flex'}} onClick={editInfo}>
        Editar <FaEdit size="20px" style={{marginLeft: '3px'}} />
      </Button>
      <Button
        variant="primary"
        type="submit"
        style={{display: 'flex'}}
        disabled={edit}
      >
        Gaurdar <FaSave size="20px" style={{marginLeft: '3px'}} />
      </Button>
      <Button
        variant="danger"
        style={{display: 'flex'}}
        disabled={edit}
        onClick={handleDelete}
      >
        Eliminar <FaTrashAlt size="20px" style={{marginLeft: '3px'}} />
      </Button>
    </Modal.Footer>
  );
};
