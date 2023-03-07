import React, {useEffect, useState} from 'react';
import {useGetData} from './../../hooks/useGetData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getFile} from '../../utils/axiosConfig';
import {FaFileDownload} from 'react-icons/fa';
import {ascendingOrder} from './../helpers/helpers';
import dayjs from 'dayjs';
import ReadOnlyText from './TextRead';
import {useIsmobile} from './../../hooks/useIsMobile';

export const ViewCategory = ({category, description}) => {
  const resp = useGetData('/productos/');

  const {data} = resp || {data: []};

  const filterCategory = data?.productos?.filter(
    (element) => element.categoria.nombre === category,
  );

  const orderItems = ascendingOrder(filterCategory);

  const isMoblie = useIsmobile();

  const viewFile = async (id, isMoblie, nombre) => {
    try {
      await getFile(`/uploads/productos/${id}`, isMoblie, nombre);
    } catch (error) {}
  };

  const [obj, setObj] = useState();

  useEffect(() => {
    const jsonText = description;

    const objConvert = jsonText ? JSON.parse(jsonText) : false;

    setObj(objConvert);
  }, [category]);

  return (
    <div className="etapsInfo">
      <h1 className="text-center title">{category}</h1>
      <hr className="divider" />
      <div className="textContainer">
        {obj &&
          obj.map((element, index) => (
            <ReadOnlyText {...element} key={index} />
          ))}
      </div>
      {orderItems?.map((element, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{element?.nombre}</Card.Title>
            <Card.Text>{element?.description}</Card.Text>
            <Button
              className="buttonDownload"
              variant="primary"
              size="sm"
              onClick={() => viewFile(element._id, isMoblie, element.nombre)}
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
