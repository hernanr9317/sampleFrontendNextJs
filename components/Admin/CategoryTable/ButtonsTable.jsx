import Button from 'react-bootstrap/Button';
import {FaTrashAlt, FaSave, FaEdit} from 'react-icons/fa';

export const ButtonsTable = ({
  handleEdit,
  handleDelete,
  editButton,
  editForm,
}) => {
  return (
    <div>
      <Button
        variant="primary"
        onClick={handleEdit}
        disabled={editButton}
        style={{display: 'inline-flex'}}
      >
        Editar
        <FaEdit color="white" size="20px" style={{marginLeft: '3px'}} />
      </Button>

      <Button
        variant="primary"
        type="submit"
        disabled={editForm}
        style={{marginLeft: '5px', display: 'inline-flex'}}
      >
        Guardar
        <FaSave color="white" size="20px" style={{marginLeft: '3px'}} />
      </Button>

      <Button
        variant="danger"
        onClick={handleDelete}
        disabled={editForm}
        style={{float: 'right', display: 'flex'}}
      >
        Eliminar
        <FaTrashAlt size="20px" style={{marginLeft: '3px'}} />
      </Button>
    </div>
  );
};
