import {useState} from 'react';
import {useGetData} from '../../hooks/useGetData';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ViewCategory} from './ViewCategory';
import {FcInspection} from 'react-icons/fc';

export const Categorias = () => {
  const [categorySelected, setCategorySelected] = useState('');

  const resp = useGetData('/categorias/');

  const {data} = resp || {data: []};

  const filteredData = data?.categorias?.filter(
    (dataElement) =>
      dataElement.nombre !== 'NORMATIVAS' && dataElement.nombre !== 'NORMATIVA',
  );

  return (
    <div style={{marginTop: '100px'}} className="etapsNav">
      <h1 className="text-center" style={{marginBottom: '30px'}}>
        Estándares tecnológicos de la Administración Pública (ETAPS)
        <FcInspection />
      </h1>

      <Tabs
        defaultActiveKey="etapTab"
        id="etapTab"
        className="mb-3 TabEtap"
        fill
        onSelect={(element) => setCategorySelected(element)}
      >
        {filteredData?.map((element, index) => (
          <Tab key={index} eventKey={element.nombre} title={element.nombre}>
            <ViewCategory
              category={categorySelected}
              description={element.description}
            />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
