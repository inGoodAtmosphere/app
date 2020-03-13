import { articleThumbnails } from '../../../public/data/article-thumbnails.json';

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(articleThumbnails));
};
