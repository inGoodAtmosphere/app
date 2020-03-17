import * as React from 'react';
import './cloud.module.scss';

function SvgCloud() {
  return (
    <svg viewBox="0 0 82 52" className="loading__cloud" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.28 15.014c-8.667-.656-14.894 2.774-15.104 13.56C-3.11 30.187-3.7 52.014 11.32 51.813c13.295-.151 26.675 0 39.97 0 13.673 0 26.043 2.67 29.957-12.098 1.892-7.057 0-13.862-3.282-17.895-4.124-5.041-7.237-6.15-14.768-5.293-3.155-6.048-2.567-6.906-6.859-11.24-6.816-6.906-17.376-6.855-24.613-.958-4.502 3.68-4.206 5.344-7.447 10.686z"
        fill="#F9F9F9"
      />
    </svg>
  );
}

export default SvgCloud;
