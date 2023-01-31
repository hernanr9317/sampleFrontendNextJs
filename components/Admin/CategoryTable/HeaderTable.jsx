import {Button} from 'react-bootstrap';
import {AiFillFileAdd} from 'react-icons/ai';

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
        Nuevo
        <AiFillFileAdd size={'22px'} style={{marginLeft: '4px'}} />
      </Button>
    </div>
  );
};
