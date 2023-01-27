import {useState, useEffect} from 'react';
import {useGetData} from '../../hooks/useGetData';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ViewCategory} from './ViewCategory';
import {useIsmobile} from './../../hooks/useIsMobile';

export const Categorias = () => {
  const [categorySelected, setCategorySelected] = useState('');
  const [styles, setStyles] = useState({});

  const resp = useGetData('/categorias/');

  const {data} = resp || {data: []};

  const filteredData = data?.categorias?.filter(
    (dataElement) =>
      dataElement.nombre !== 'NORMATIVAS' && dataElement.nombre !== 'NORMATIVA',
  );

  const isMobile = useIsmobile();

  useEffect(() => {
    setStyles(isMobile ? {maxWidth: '200px', margin: 'auto'} : {});
  }, [isMobile]);

  return (
    <div style={{marginTop: '100px'}}>
      <h1 className="text-center" style={{marginBottom: '30px'}}>
        Estándares tecnológicos de la Administración Pública (ETAPS)
      </h1>

      <Tabs
        defaultActiveKey="etapTab"
        id="etapTab"
        className="mb-3"
        fill
        onSelect={(element) => setCategorySelected(element)}
        style={styles}
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
