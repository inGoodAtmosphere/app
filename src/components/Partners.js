import React from 'react';
import { partners } from '../data/partners.json';
import CardWithThumbnail from './CardWithThumbnail';

const Partners = () => (
  <div className="partners">
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
  </div>
);

export default Partners;
