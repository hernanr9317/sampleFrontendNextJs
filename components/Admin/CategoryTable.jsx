import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ModalElement} from './ModalElement';

export const CategoryTable = ({categories, title, description}) => {
  const [element, setElement] = useState('');
  const [interaction, setInteraction] = useState(false);
  const [edit, setEdit] = useState(true);

  const selectItem = (element) => {
    setElement(element);
    setInteraction(!interaction);
  };

  useEffect(() => {
    if (categories?.length > 0) setEdit(false);
  }, [categories]);

  return (
    <div>
      <Card className="mt-5">
        <Card.Header>Informe de la categoria</Card.Header>
        <Card.Body>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              value={title}
              disabled
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={description}
              style={{borderStyle: 'none'}}
              disabled
            ></textarea>
          </div>
          <Button variant="primary" disabled={edit}>
            Editar
          </Button>
        </Card.Body>
      </Card>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Orden</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((element, index) => (
            <tr
              key={index}
              style={{cursor: 'pointer'}}
              onClick={() => selectItem(element)}
            >
              <th scope="row">{index + 1}</th>
              <td>{element.nombre}</td>
              <td>{element.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalElement element={element} interaction={interaction} />
    </div>
  );
};
