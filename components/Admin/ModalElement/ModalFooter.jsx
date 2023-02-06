import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {FaTrashAlt, FaSave, FaEdit} from 'react-icons/fa';

export const ModalFooter = ({editInfo, edit, handleDelete, type}) => {
  return (
    <Modal.Footer>
      <OverlayTrigger overlay={<Tooltip>Editar</Tooltip>}>
        <span className="d-inline-block">
          <Button
            variant="primary"
            style={{display: 'flex'}}
            onClick={editInfo}
          >
            <FaEdit size="20px" style={{marginLeft: '3px'}} />
          </Button>
        </span>
      </OverlayTrigger>
      <OverlayTrigger overlay={<Tooltip>Guardar</Tooltip>}>
        <span className="d-inline-block">
          <Button
            variant="primary"
            type="submit"
            style={{display: 'flex'}}
            disabled={edit}
          >
            <FaSave size="20px" style={{marginLeft: '3px'}} />
          </Button>
        </span>
      </OverlayTrigger>
      {type !== 'addElement' && (
        <OverlayTrigger overlay={<Tooltip>Elminar</Tooltip>}>
          <span className="d-inline-block">
            <Button
              variant="danger"
              style={{display: 'flex'}}
              disabled={edit}
              onClick={handleDelete}
            >
              <FaTrashAlt size="20px" style={{marginLeft: '3px'}} />
            </Button>
          </span>
        </OverlayTrigger>
      )}
    </Modal.Footer>
  );
};
