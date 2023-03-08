import {useState, useContext} from 'react';
import Image from 'next/image';
import {ChangeDataContext} from '../../context/changeData/ChangeDataContext';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ViewCategory} from './ViewCategory';
import {FcInspection} from 'react-icons/fc';
import initialImg from '../../public/assets/etaps/nube.webp';

export const Categorias = () => {
  const [categorySelected, setCategorySelected] = useState('');

  const {categories} = useContext(ChangeDataContext);

  const filteredData = categories?.categorias?.filter(
    (dataElement) =>
      dataElement.nombre !== 'NORMATIVAS' && dataElement.nombre !== 'NORMATIVA',
  );

  return (
    <div style={{marginTop: '100px'}} className="etapsNav container">
      <h1 className="text-center main-title" style={{marginBottom: '30px'}}>
        Estándares tecnológicos de la Administración Pública <br></br> (ETAPS)
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

      {categorySelected === '' && (
        <div className="initialImgContainer">
          <Image
            src={initialImg}
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
      )}
    </div>
  );
};
