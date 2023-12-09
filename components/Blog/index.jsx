import {ArticleList} from './ArticleList';

export const BlogIndex = ({numberItems}) => {
  return (
    <div className="blog">
      <ArticleList numberItems={numberItems} />
    </div>
  );
};
