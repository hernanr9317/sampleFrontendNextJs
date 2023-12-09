import {useContext, useState} from 'react';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import {AddCategory} from './AddCaregory';
import {CategoryTable} from './CategoryTable/index';

export const CategoryFilter = () => {
  const {categories, deletedCategories, products} =
    useContext(ChangeDataContext);

  const [elementSelected, setElementSelected] = useState([]);

  const categoriesFilter = products?.productos?.filter(
    (element) => element?.categoria?.nombre === elementSelected?.nombre,
  );

  const onClick = (element) => {
    setElementSelected(element);
  };

  return (
    <div>
      <ButtonGroup className="mt-4">
        <AddCategory />

        <DropdownButton
          variant="dark"
          as={ButtonGroup}
          className="category-dropdown-button"
          title="Categorías"
          id="bg-nested-dropdown"
          disabled={categories?.categorias?.length > 0 ? false : true}
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
        <DropdownButton
          variant="dark"
          as={ButtonGroup}
          className="category-dropdown-button"
          title="Restaurar categoría"
          id="bg-nested2-dropdown"
          disabled={deletedCategories?.categorias?.length > 0 ? false : true}
        >
          {deletedCategories?.categorias?.map((element, index) => {
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
      {!elementSelected?.nombre && (
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
