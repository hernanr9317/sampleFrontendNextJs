import {useState} from 'react';
import {useGetData} from '../../hooks/useGetData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {ViewCategory} from './ViewCategory';

export const Categorias = () => {
  const [categorySelected, setCategorySelected] = useState('');

  const resp = useGetData('/categorias/');

  const {data} = resp || {data: []};

  return (
    <div style={{marginTop: '100px'}}>
      <h1 className="text-center" style={{marginBottom: '30px'}}>
        Estándares tecnológicos de la Administración Pública (ETAPS)
      </h1>
      <CardGroup style={{marginBottom: '50px'}}>
        {data?.categorias?.map((element, index) => (
          <Card style={{width: '18rem'}} key={index}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{element.nombre}</Card.Title>
              <Button
                variant="Light"
                size="sm"
                onClick={() => setCategorySelected(element.nombre)}
                className="stretched-link"
              >
                Ver estándares
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <ViewCategory category={categorySelected} />
    </div>
  );
};
