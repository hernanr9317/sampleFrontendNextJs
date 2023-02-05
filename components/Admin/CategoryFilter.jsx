import {useContext, useState, useEffect} from 'react';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import {AddCategory} from './AddCaregory';
import {getDataAxios} from './../../utils/axiosConfig';
import {CategoryTable} from './CategoryTable/index';

export const CategoryFilter = () => {
  const {needUpload} = useContext(ChangeDataContext);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [categorySelected, setCategorySelected] = useState('');
  const [descrription, setDescrription] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    getCategorias();
    getProductos();
  }, [needUpload]);

  const categoriesFilter = productos?.data?.productos?.filter(
    (element) => element?.categoria?.nombre === categorySelected,
  );

  //TODO: NO ANDA AL GUARDAR EL TITULO
  useEffect(() => {
    const filter = categorias?.find(
      (element) => element?.nombre === categorySelected,
    );
    setCategorySelected(filter?.nombre);
    setDescrription(filter?.description);
    setId(filter?._id);
  }, [needUpload, categorias]);

  const getCategorias = async () => {
    getDataAxios('/categorias/').then((resp) => {
      setCategorias(resp?.data?.categorias);
    });
  };

  const getProductos = async () => {
    getDataAxios('/productos/').then((resp) => {
      setProductos(resp);
    });
  };

  const onClick = (element) => {
    setCategorySelected(element.nombre);
    setDescrription(element.description);
    setId(element._id);
  };

  return (
    <div>
      <ButtonGroup className="mt-4">
        <AddCategory />

        <DropdownButton
          as={ButtonGroup}
          title="Categorias"
          id="bg-nested-dropdown"
        >
          {categorias?.map((element, index) => {
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
        <Alert variant="warning" className="mt-3">
          Seleccione una categoría
        </Alert>
      )}

      <CategoryTable
        categories={categoriesFilter}
        title={categorySelected}
        id={id}
        description={descrription}
      />
    </div>
  );
};
