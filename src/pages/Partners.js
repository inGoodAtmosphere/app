import React from 'react';
import { partners } from '../data/partners.json';
import CardWithThumbnail from '../components/CardWithThumbnail';

const Partners = () => (
  <main className="content">
    <h1>Nasi Partnerzy</h1>
    {partners.map((partner) => (
      <CardWithThumbnail
        key={partner.name}
        header={partner.name}
        description={partner.description}
        thumbnail={partner.thumbnail}
        env="partners"
      />
    ))}
  </main>
);

export default Partners;
