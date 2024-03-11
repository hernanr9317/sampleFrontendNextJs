import {useContext} from 'react';
import Table from 'react-bootstrap/Table';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import {getFile} from '../../utils/axiosConfig';
import {FcDocument} from 'react-icons/fc';
import {ascendingOrder} from './../helpers/helpers';
import ReadOnlyText from './../Slate/TextRead';
import {useIsmobile} from './../../hooks/useIsMobile';
import {CustomButton} from './../CustomButton/index';

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

  const isMoblie = useIsmobile();

  const viewFile = async (id, isMoblie, nombre) => {
    try {
      await getFile(`/uploads/productos/${id}`, isMoblie, nombre);
    } catch (error) {}
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
                <CustomButton
                  type="slide_down"
                  iconType="download"
                  onClick={() =>
                    viewFile(element._id, isMoblie, element.nombre)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
