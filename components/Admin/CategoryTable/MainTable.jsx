import {AiOutlineFieldNumber} from 'react-icons/ai';

export const MainTable = ({categories, selectItem}) => {
  return (
    <table className="table table-hover mt-3">
      <thead className="colorHeaderTh">
        <tr>
          <th scope="col">
            <AiOutlineFieldNumber size={'24px'} />
          </th>
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
  );
};
