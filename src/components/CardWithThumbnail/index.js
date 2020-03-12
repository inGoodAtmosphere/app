import React, { useContext } from 'react';
import Image from './Image';
import Content from './Content';
import withContext from '../../utils/withContext';
import Context from '../../utils/Context';
import './index.module.scss';

const CardWithThumbnail = () => {
  const { env } = useContext(Context);
  return (
    <div
      className={`card ${env}__card-with-thumbnail card-with-thumbnail__card`}
    >
      <Image />
      <Content />
    </div>
  );
};
export default withContext(CardWithThumbnail);
