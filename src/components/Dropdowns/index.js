// components/Dropdowns.js

import React from 'react';
import Styles from './Dropdowns.module.css';

const Dropdowns = ({ states, cities, selectedState, selectedCity, onStateChange, onCityChange }) => {
  return (
    <div className={Styles.dropdown_container}>
      <select value={selectedState} onChange={(e)=>onStateChange(e.target.value)} className={Styles.dropdown}>
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <select value={selectedCity} onChange={(e)=>onCityChange(e.target.value)} className={Styles.dropdown}>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdowns;
