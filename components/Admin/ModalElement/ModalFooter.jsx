import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {FaTrashAlt, FaSave, FaEdit} from 'react-icons/fa';

export const ModalFooter = ({editInfo, edit, handleDelete}) => {
  return (
    <Modal.Footer>
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}>
        <span className="d-inline-block">
          <Button
            variant="primary"
            style={{display: 'flex'}}
            onClick={editInfo}
          >
            Editar <FaEdit size="20px" style={{marginLeft: '3px'}} />
          </Button>
        </span>
      </OverlayTrigger>
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
