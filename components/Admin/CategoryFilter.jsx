import {useGetData} from '../../hooks/useGetData';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export const CategoryFilter = () => {
  const {data} = useGetData('/categorias/');

  //   console.log(data?.categorias);

  const onClick = (element) => {
    console.log(element);
  };

  return (
    <div>
      <ButtonGroup>
        <Button>+ Agregar categoria</Button>
        <Button>- Eliminar categoria</Button>

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
    </div>
  );
};
