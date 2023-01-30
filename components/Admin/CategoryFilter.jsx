import {useContext, useState, useEffect} from 'react';
import {useGetData} from '../../hooks/useGetData';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import {CategoryTable} from './CategoryTable';
import {AddCategory} from './AddCaregory';
import {getDataAxios} from './../../utils/axiosConfig';

export const CategoryFilter = () => {
  const {needUpload} = useContext(ChangeDataContext);
  const [productos, setProductos] = useState([]);

  const {data} = useGetData('/categorias/') || {data: []};

  const getProductos = async () => {
    getDataAxios('/productos/').then((resp) => {
      setProductos(resp);
    });
  };

  useEffect(() => {
    getProductos();
  }, [needUpload]);

  const [categorySelected, setCategorySelected] = useState('');
  const [descrription, setDescrription] = useState('');
  const [id, setId] = useState('');

  const categoriesFilter = productos?.data?.productos?.filter(
    (element) => element?.categoria?.nombre === categorySelected,
  );

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
        id={id}
        description={descrription}
      />
    </div>
  );
};
