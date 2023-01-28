import Table from 'react-bootstrap/Table';
import {useGetData} from './../../hooks/useGetData';
import Button from 'react-bootstrap/Button';
import {getFile} from '../../utils/axiosConfig';
import {FaCloudDownloadAlt} from 'react-icons/fa';

export const NormsTable = () => {
  const resp = useGetData('/productos/');

  const {data} = resp || {data: []};

  const filterCategory = data?.productos?.filter(
    (element) => element.categoria.nombre === 'NORMATIVAS',
  );

  const viewFile = async (id, nombre) => {
    await getFile(`/uploads/productos/${id}`, nombre);
  };

  return (
    <div className="Normativa">
      <h1 style={{textAlign: 'center', marginBottom: '25px'}}>Normativas</h1>
      <Table striped bordered hover variant="dark" className="NormTable">
        <thead>
          <tr>
            <th className="NormTh">Normativa</th>
            <th className="NormTh">Descripción</th>
            <th className="NormTh download">Descarga</th>
          </tr>
        </thead>
        <tbody>
          {filterCategory?.map((element, index) => (
            <tr key={index}>
              <td>{element.nombre}</td>
              <td>{element.description}</td>
              <td className="NormTr download">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => viewFile(element._id, element.nombre)}
                >
                  <FaCloudDownloadAlt size={'20px'} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
