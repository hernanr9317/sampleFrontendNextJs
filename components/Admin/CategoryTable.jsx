import {useState} from 'react';
import {ModalElement} from './ModalElement';

export const CategoryTable = ({categories, title}) => {
  const [element, setElement] = useState('');
  const [interaction, setInteraction] = useState(false);

  const selectItem = (element) => {
    setElement(element);
    setInteraction(!interaction);
  };

  return (
    <div>
      <h1>{title}</h1>

      <table className="table table-hover">
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
