import {Button} from 'react-bootstrap';
import {FaFolderPlus} from 'react-icons/fa';

export const HeaderTable = ({title, addElement}) => {
  return (
    <div className="headerTable">
      <h3 className="title">Elementos de la categoría</h3>
      <Button
        className="addElementButton"
        variant="success"
        disabled={title === '' ? true : false}
        onClick={() => addElement('')}
      >
        Agregar elemento
        <FaFolderPlus size={'22px'} style={{marginLeft: '4px'}} />
      </Button>
    </div>
  );
};
