import {useContext, useState} from 'react';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import {AddCategory} from './AddCaregory';
import {CategoryTable} from './CategoryTable/index';

export const CategoryFilter = () => {
  const {categories, products} = useContext(ChangeDataContext);

  const [elementSelected, setElementSelected] = useState([]);

  const categoriesFilter = products?.productos?.filter(
    (element) => element?.categoria?.nombre === elementSelected.nombre,
  );

  const onClick = (element) => {
    setElementSelected(element);
  };

  return (
    <div>
      <ButtonGroup className="mt-4">
        <AddCategory />

        <DropdownButton
          as={ButtonGroup}
          title="Categorías"
          id="bg-nested-dropdown"
        >
          {categories?.categorias?.map((element, index) => {
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
      {!elementSelected.nombre && (
        <Alert variant="warning" className="mt-3">
          Seleccione una categoría
        </Alert>
      )}
      <CategoryTable
        setElementSelected={setElementSelected}
        categories={categoriesFilter}
        elementSelected={elementSelected}
      />
    </div>
  );
};
