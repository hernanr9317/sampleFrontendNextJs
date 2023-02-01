import Table from 'react-bootstrap/Table';
import {useGetData} from './../../hooks/useGetData';
import Button from 'react-bootstrap/Button';
import {getFile} from '../../utils/axiosConfig';
import {FcDocument} from 'react-icons/fc';
import {ImArrowDown} from 'react-icons/im';
import {ascendingOrder} from './../helpers/helpers';

export const NormsTable = () => {
  const resp = useGetData('/productos/');

  const {data} = resp || {data: []};

  const filterCategory = data?.productos?.filter(
    (element) => element.categoria.nombre === 'NORMATIVAS',
  );

  const orderItems = ascendingOrder(filterCategory);

  const viewFile = async (id, nombre) => {
    await getFile(`/uploads/productos/${id}`, nombre);
  };

  return (
    <div className="Normativa">
      <h1 style={{textAlign: 'center', marginBottom: '25px'}}>
        Normativas <FcDocument />
      </h1>
      <Table hover className="NormTable">
        <thead>
          <tr className="NormTh">
            <th>Normativa</th>
            <th>Descripción</th>
            <th className="download">Descarga</th>
          </tr>
        </thead>
        <tbody>
          {orderItems?.map((element, index) => (
            <tr key={index}>
              <td>{element.nombre}</td>
              <td className="NormTr description">{element.description}</td>
              <td className="NormTr download">
                <Button
                  className="downloadButton"
                  variant="light"
                  size="sm"
                  onClick={() => viewFile(element._id, element.nombre)}
                >
                  <ImArrowDown className="downloadIcon" size={'15px'} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
