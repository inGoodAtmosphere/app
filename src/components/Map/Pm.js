import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import mapContext from '../../utils/map-context';
import './pm.module.scss';


const Caqi = ({purpose}) => {
    const { activeSensor } = useContext(mapContext);
    
    return (
      <div className="map__data__pm">
        <h3>{purpose.toUpperCase()}</h3>
        <h2>
          {activeSensor[purpose]}
          &nbsp; µg/m³
        </h2>
        <h2 className="map__data__percent">
          {activeSensor[purpose]/ (purpose==="pm25" ? 25 : 50)*100}
          %
        </h2>
      </div>
    );
}

Caqi.propTypes = {purpose:PropTypes.string.isRequired}

export default Caqi;
