import React from 'react';
import PropTypes from 'prop-types';

const Marker = (props) => {
  const { color, title } = props;
  return (
    <div>
      <div
        className="marker"
        style={{ backgroundColor: color }}
        // style={{
        //   position: 'absolute',
        //   top: '50%',
        //   left: '50%',
        //   width: '18px',
        //   height: '18px',
        //   backgroundColor: '#000',
        //   border: '2px solid #fff',
        //   borderRadius: '100%',
        //   userSelect: 'none',
        //   transform: 'translate(-50%, -50%)',
        // }}
        title={title}
      />
      <div className="pulse" />
    </div>
  );
};
Marker.defaultProps = {
  color: '',
};
Marker.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};
export default Marker;
