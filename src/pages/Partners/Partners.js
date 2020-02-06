import React from 'react';
import { partners } from '../../data/partners.json';
import CardWithThumbnail from '../../components/CardWithThumbnail/CardWithThumbnail';

const Partners = () => (
  <main className="content">
    <h1>Nasi Partnerzy</h1>
    {partners.map(({ name, description, thumbnail }) => (
      <CardWithThumbnail
        key={name}
        header={name}
        description={description}
        thumbnail={thumbnail}
        env="partners"
      />
    ))}
  </main>
);

export default Partners;
