import {useState, useContext, useEffect} from 'react';
import Image from 'next/image';
import {ChangeDataContext} from '../../context/changeData/ChangeDataContext';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ViewCategory} from './ViewCategory';
import {FcInspection} from 'react-icons/fc';
import initialImg from '../../public/assets/etaps/nube.webp';
import {useRouter} from 'next/router';
import {generatePath} from '../helpers/helpers';

export const Categorias = () => {
  const router = useRouter();
  const queryString = router.query.type;
  const [categorySelected, setCategorySelected] = useState('');
  const {categories} = useContext(ChangeDataContext);

  const excludCategories = ['NORMATIVA', 'NORMATIVAS', 'NOTA', 'NOTAS'];

  const filteredData = categories?.categorias?.filter(
    (dataElement) => !excludCategories.includes(dataElement.nombre),
  );

  useEffect(() => {
    if (queryString) {
      const queryElementFilter = categories?.categorias?.find(
        (e) => e.pathname === queryString,
      );

      if (queryElementFilter) {
        setCategorySelected(queryElementFilter.nombre?.toUpperCase());
        router.push(`?type=${queryElementFilter.pathname}`), {scroll: false};
      }
    }
  }, [queryString]);

  useEffect(() => {
    if (categorySelected !== '') {
      const queryElementFilter = categories?.categorias?.find(
        (e) => e.nombre === categorySelected,
      );
      router.push(`?type=${queryElementFilter?.pathname}`), {scroll: false};
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
            {/* {console.log(element)} */}
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
