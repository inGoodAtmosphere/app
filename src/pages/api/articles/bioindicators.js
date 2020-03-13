import { article } from '../../../../public/data/articles/Naturalne-wskazniki-zanieczyszczenia-powietrza.json';

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(article));
};
