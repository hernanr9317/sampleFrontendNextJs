import {useState} from 'react';
import {useGetData} from '../../hooks/useGetData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ViewCategory} from './ViewCategory';

export const Categorias = () => {
  const [categorySelected, setCategorySelected] = useState('');

  const resp = useGetData('/categorias/');

  const {data} = resp || {data: []};

  const filteredData = data?.categorias?.filter(
    (dataElement) =>
      dataElement.nombre !== 'NORMATIVAS' && dataElement.nombre !== 'NORMATIVA',
  );

  return (
    <div style={{marginTop: '100px'}}>
      <h1 className="text-center" style={{marginBottom: '30px'}}>
        Estándares tecnológicos de la Administración Pública (ETAPS)
      </h1>

      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
        onSelect={(element) => setCategorySelected(element)}
      >
        {filteredData?.map((element, index) => (
          <Tab key={index} eventKey={element.nombre} title={element.nombre}>
            <ViewCategory category={categorySelected} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
