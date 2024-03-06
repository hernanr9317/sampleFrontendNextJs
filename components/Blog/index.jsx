import {ArticleList} from './ArticleList';

export const BlogIndex = ({limitItems, paginator}) => {
  return (
    <div className="blog">
      <ArticleList limitItems={limitItems} paginator={paginator} />
    </div>
  );
};
