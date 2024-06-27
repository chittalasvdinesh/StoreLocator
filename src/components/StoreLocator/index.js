'use client'
import { useEffect, useState } from 'react';
import MapLocator from '../MapLocator';
import Dropdowns from '../Dropdowns';
import Styles from './StoreLocator.module.css'

const StoreLocator = ({ data }) => {
  const [state, setState] = useState('Delhi');
  const [city, setCity] = useState('New Delhi');
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });


  const handleStateChange = (val) => {

    setState(val)
    const cityVal = Object.keys(data[val])[0]
    console.log(cityVal)
    setCity(cityVal)

  }
  const handleCityChange = (val) => {
    console.log(val)
    setCity(val)

  }

  console.log(data[state][city])

  return (
    <div>
      <Dropdowns
        states={Object.keys(data)}
        cities={Object.keys(data[state])}
        selectedState={state}
        selectedCity={city}
        onStateChange={handleStateChange}
        onCityChange={handleCityChange}
      />
      <div className={Styles.store_container}>
        <div className={Styles.cards_container} >
          {data[state][city].map((val) => {
            return <div className={Styles.cards}>
              <h3>{val.name}</h3>
              <p>{val.averageRating} Rating</p>
              <p>Type: {val.type}</p>
              <span>Open {val.phoneNumber}</span>
              <p>{val.address}, {val.city}, {val.state}, {val.pincode}</p>
              <button style={{ color: "yellow",background:'transparent',padding:'10px',marginTop:"10px", border:"1px solid" }} onClick={() => setMapCenter({ lat: parseFloat(val.latitude), lng: parseFloat(val.longitude), name: val.area })}>Get Directions</button>
            </div>
          })}
        </div>
        <div className={Styles.map_container}>
          <MapLocator stores={data[state] ? data[state][city] : []} center={mapCenter} />
        </div>


      </div>






    </div >
  );
};

export default StoreLocator;
