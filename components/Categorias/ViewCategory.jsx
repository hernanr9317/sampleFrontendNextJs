import {useGetData} from './../../hooks/useGetData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getFile} from '../../utils/axiosConfig';
import {FaFileDownload} from 'react-icons/fa';
import {ascendingOrder} from './../helpers/helpers';
import dayjs from 'dayjs';

export const ViewCategory = ({category, description}) => {
  const resp = useGetData('/productos/');

  const {data} = resp || {data: []};

  const filterCategory = data?.productos?.filter(
    (element) => element.categoria.nombre === category,
  );

  const orderItems = ascendingOrder(filterCategory);

  const viewFile = async (id, nombre) => {
    await getFile(`/uploads/productos/${id}`, nombre);
  };

  return (
    <div className="etapsInfo">
      <h1 className="text-center title">{category}</h1>
      <hr className="divider" />
      <h2 className="description">{description}</h2>
      {orderItems?.map((element, index) => (
        <Card key={index}>
          {/* <Card.Header></Card.Header> */}
          <Card.Body>
            <Card.Title>{element?.nombre}</Card.Title>
            <Card.Text>{element?.description}</Card.Text>
            <Button
              className="buttonDownload"
              variant="primary"
              size="sm"
              onClick={() => viewFile(element._id, element.nombre)}
              style={{float: 'right'}}
            >
              Descargar <FaFileDownload size={'22px'} />
            </Button>
            <Card.Footer className="text-muted cardFooter">
              Ùltima actualización{' '}
              {dayjs(element?.updatedAt).format('DD/MM/YYYY')}
            </Card.Footer>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
