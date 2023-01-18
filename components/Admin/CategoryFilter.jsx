import {useState, useEffect} from 'react';
import {useGetData} from '../../hooks/useGetData';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import {CategoryTable} from './CategoryTable';

export const CategoryFilter = () => {
  const {data} = useGetData('/categorias/') || {data: []};
  const productos = useGetData('/productos/');

  const [categorySelected, setCategorySelected] = useState('');
  const [descrription, setDescrription] = useState('');

  const categoriesFilter = productos?.data?.productos.filter(
    (element) => element.categoria.nombre === categorySelected,
  );

  const onClick = (element) => {
    setCategorySelected(element.nombre);
    setDescrription(element.description);
  };

  return (
    <div>
      <ButtonGroup className="mt-4">
        <Button>+ Agregar categoria</Button>

        <DropdownButton
          as={ButtonGroup}
          title="Categorias"
          id="bg-nested-dropdown"
        >
          {data?.categorias.map((element, index) => {
            return (
              <Dropdown.Item
                key={index}
                eventKey={index}
                onClick={() => onClick(element)}
              >
                {element.nombre}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </ButtonGroup>

      {categorySelected === '' && (
        <Alert variant="primary" className="mt-3">
          Seleccione una categoría
        </Alert>
      )}

      <CategoryTable
        categories={categoriesFilter}
        title={categorySelected}
        description={descrription}
      />
    </div>
  );
};
