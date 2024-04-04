import {ArticleList} from './ArticleList';
import {useContext} from 'react';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';

export const BlogIndex = ({limitItems, paginator}) => {
  const {products} = useContext(ChangeDataContext);

  const filterCategory = products?.productos?.filter(
    (element) => element?.categoria?.nombre === 'NOTA',
  );

  return (
    <div className="blog">
      <ArticleList
        list={filterCategory}
        limitItems={limitItems}
        paginator={paginator}
      />
    </div>
  );
};
