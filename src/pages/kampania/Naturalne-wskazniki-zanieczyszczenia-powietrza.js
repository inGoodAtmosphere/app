import React from 'react';
import ArticleContent from '../../components/Article';
import { article } from '../../../public/data/articles/Naturalne-wskazniki-zanieczyszczenia-powietrza.json';

const Article = () => {
  return article && <ArticleContent value={article} />;
};

export default Article;
