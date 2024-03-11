import React, {useContext, useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import {getFile} from '../../utils/axiosConfig';
import {ascendingOrder} from './../helpers/helpers';
import dayjs from 'dayjs';
import ReadOnlyText from '../Slate/TextRead';
import {useIsmobile} from './../../hooks/useIsMobile';
import {ChangeDataContext} from '../../context/changeData/ChangeDataContext';
import {CustomButton} from './../CustomButton/index';

export const ViewCategory = ({category, description}) => {
  const {products} = useContext(ChangeDataContext) || {products: []};

  const filterCategory = products?.productos?.filter(
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
  const [displayDescription, setDisplayDescription] = useState();

  useEffect(() => {
    const jsonText = description;

    const objConvert = jsonText ? JSON.parse(jsonText) : false;

    setObj(objConvert);
    if (obj && obj[0]?.children[0]?.text !== '') {
      setDisplayDescription(true);
    }
  }, [category]);

  return (
    <div className="etapsInfo">
      <h1 className="text-center title">{category}</h1>
      {obj && displayDescription && (
        <>
          <hr className="divider" />
          <div className="textContainer">
            {obj?.map((element, index) => (
              <ReadOnlyText {...element} key={index} />
            ))}
          </div>
        </>
      )}
      {orderItems?.map((element, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{element?.nombre}</Card.Title>
            <Card.Text>{element?.description}</Card.Text>
            <Card.Footer className="text-muted cardFooter">
              <p>
                Última actualización{' '}
                {dayjs(element?.updatedAt).format('DD/MM/YYYY')}
              </p>
              <CustomButton
                text="Descargar"
                type="slide_down"
                iconType="download"
                onClick={() => viewFile(element._id, isMoblie, element.nombre)}
              />
            </Card.Footer>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
