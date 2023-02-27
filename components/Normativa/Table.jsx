import {useContext} from 'react';
import Table from 'react-bootstrap/Table';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import Button from 'react-bootstrap/Button';
import {getFile} from '../../utils/axiosConfig';
import {FcDocument} from 'react-icons/fc';
import {ImArrowDown} from 'react-icons/im';
import {ascendingOrder} from './../helpers/helpers';
import ReadOnlyText from '../Categorias/TextRead';

export const NormsTable = () => {
  const {categories, products} = useContext(ChangeDataContext);

  const filterCategory = products?.productos?.filter(
    (element) => element?.categoria?.nombre === 'NORMATIVAS',
  );

  const infoCategory = categories?.categorias?.find(
    (element) => element?.nombre === 'NORMATIVAS',
  );

  const jsonText = infoCategory?.description;

  let objConvert = undefined;

  if (jsonText) objConvert = JSON.parse(jsonText);

  const orderItems = ascendingOrder(filterCategory);

  const viewFile = async (id, nombre) => {
    await getFile(`/uploads/productos/${id}`, nombre);
  };
  return (
    <div className="Normativa">
      <h1 style={{textAlign: 'center', marginBottom: '25px'}}>
        Normativas <FcDocument />
      </h1>
      {objConvert &&
        objConvert.map((e, index) => <ReadOnlyText {...e} key={index} />)}
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
