import {useState, useEffect} from 'react';
import {useGetData} from '../../hooks/useGetData';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {CategoryTable} from './CategoryTable';

export const CategoryFilter = () => {
  const {data} = useGetData('/categorias/') || {data: []};
  const productos = useGetData('/productos/');

  const [categorySelected, setCategorySelected] = useState('');

  const categoriesFilter = productos?.data?.productos.filter(
    (element) => element.categoria.nombre === categorySelected,
  );

  const onClick = (element) => {
    setCategorySelected(element.nombre);
  };

  return (
    <div>
      <ButtonGroup>
        <Button>+ Agregar categoria</Button>
        {/* <Button>- Eliminar categoria</Button> */}

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

      <CategoryTable categories={categoriesFilter} title={categorySelected} />
    </div>
  );
};
