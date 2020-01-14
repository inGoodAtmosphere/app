import React from 'react';
import InfoCard from './InfoCard';

const LandingPage = () => (
  <>
    <img src="https://picsum.photos/280/210" alt="Logo" />
    <h1>Feel the air</h1>
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus
      illo beatae!
    </h2>
    <a href="/kampania">Zobacz jak</a>
    <InfoCard
      className="project"
      header="Nasz projekt"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        vel rerum mollitia, in maiores deleniti eos quaerat animi ullam aut
        beatae vitae! Incidunt officiis obcaecati officia mollitia cumque natus
        qui!"
    />
    <div className="map">
      <div className="map__header">
        <h2>Mapa z pomiarami z naszych czujników</h2>
        <img src="https://picsum.photos/100/130" alt="Mapa" />
      </div>
      <div className="map__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum!
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </>
);

export default LandingPage;
