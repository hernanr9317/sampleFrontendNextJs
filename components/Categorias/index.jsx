import {useState, useContext, useEffect} from 'react';
import Image from 'next/image';
import {ChangeDataContext} from '../../context/changeData/ChangeDataContext';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ViewCategory} from './ViewCategory';
import {FcInspection} from 'react-icons/fc';
import initialImg from '../../public/assets/etaps/nube.webp';
import {useRouter} from 'next/router';

export const Categorias = () => {
  const router = useRouter();
  const queryString = router.query.type;
  const [categorySelected, setCategorySelected] = useState('');
  const {categories} = useContext(ChangeDataContext);

  const excludCategories = ['NORMATIVA', 'NORMATIVAS', 'NOTA', 'NOTAS'];

  const filteredData = categories?.categorias?.filter(
    (dataElement) => !excludCategories.includes(dataElement.nombre),
  );

  const queryElementFilter = categories?.categorias?.find(
    (e) => e.pathname === queryString,
  );

  useEffect(() => {
    if (router.isReady && queryString) {
      if (queryElementFilter) setCategorySelected(queryElementFilter.nombre);
    }
  }, [queryString, queryElementFilter]);

  useEffect(() => {
    if (categorySelected !== '') {
      const queryElementFilter = categories?.categorias?.find(
        (e) => e.nombre === categorySelected,
      );
      if (queryElementFilter)
        router.push(`?type=${queryElementFilter.pathname}`), {scroll: false};
    }
  }, [categorySelected]);

  return (
    <div style={{marginTop: '100px'}} className="etapsNav container">
      <h1 className="text-center main-title" style={{marginBottom: '30px'}}>
        Estándares tecnológicos de la Administración Pública <br></br> (ETAPS)
        <FcInspection />
      </h1>
      <Tabs
        activeKey={categorySelected}
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
          <div className="cater3-movingBG">
            <div className="flyinTxtCont">
              <div className="flyIn lineOne">Busca</div>
              <div className="flyIn lineTwo">Estándares </div>
              <div className="flyIn lineThree">tecnológicos</div>
              <div className="flyIn lineFour">
                Explorá y encontrá el adecuado.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
