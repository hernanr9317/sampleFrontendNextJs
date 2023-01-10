import {useGetData} from './../../hooks/useGetData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ViewCategory = ({category}) => {
  // const {data} = useGetData('/productos/');
  const resp = useGetData('/productos/');

  const {data} = resp || {data : []};

  const filterCategory = data?.productos?.filter(
    (element) => element.categoria.nombre === category,
  );

  return (
    <div style={{marginBottom: '50px'}}>
      <h2 className="text-center">{category}</h2>
      {filterCategory?.map((element, index) => (
        <Card key={index}>
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>{element.nombre}</Card.Title>
            <Card.Text>{element.description}</Card.Text>
            <Button variant="primary" size="sm">
              Descargar estándar
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
