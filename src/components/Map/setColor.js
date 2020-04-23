import { descriptions } from '../../../public/data/caqi-descriptions.json';

export default (caqi, lightness = '45') => {
  const [veryBad, bad, medium, good, veryGood, offline] = descriptions;

  if (caqi < 25)
    return {
      backgroundColor: `hsl(143, 50%, ${lightness}%)`,
      status: veryGood,
    };
  if (caqi < 50)
    return {
      backgroundColor: `hsl(79, 50%, ${lightness}%)`,
      status: good,
    };
  if (caqi < 75)
    return {
      backgroundColor: `hsl(41, 50%, ${lightness}%)`,
      status: medium,
    };
  if (caqi < 100)
    return {
      backgroundColor: `hsl(4, 50%, ${lightness}%)`,
      status: bad,
    };
  if (caqi >= 100)
    return {
      backgroundColor: `hsl(301, 50%, ${lightness - 10}%)`,
      status: veryBad,
    };
  return { backgroundColor: 'hsl(0, 0, 50%)', status: offline };
};
