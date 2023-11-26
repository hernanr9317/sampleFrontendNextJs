import {ArticleList} from './ArticleList';

export const BlogIndex = () => {
  return (
    <div className="blog">
      <h1 style={{textAlign: 'center', marginBottom: '25px'}}>Blog</h1>
      <ArticleList />
    </div>
  );
};
