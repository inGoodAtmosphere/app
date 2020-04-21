import { descriptions } from '../../../public/data/caqi-descriptions.json';

export default (caqi) => {
  const [veryBad, bad, medium, good, veryGood, offline] = descriptions;

  if (caqi < 25) return { backgroundColor: '#44a368', status: veryGood };
  if (caqi < 50) return { backgroundColor: '#a9c46e', status: good };
  if (caqi < 75) return { backgroundColor: '#c19330', status: medium };
  if (caqi < 100) return { backgroundColor: '#e1625a', status: bad };
  if (caqi >= 100) return { backgroundColor: '#7c1d7a', status: veryBad };
  return { backgroundColor: '#999999', status: offline };
};
