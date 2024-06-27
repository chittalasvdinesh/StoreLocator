'use client '
import React, { useEffect, useRef, useState } from 'react';
import { APIProvider, AdvancedMarker, Map, MapCameraChangedEvent, Pin, useMap } from '@vis.gl/react-google-maps';



const MapLocator = ({ center, stores }) => {



  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({map});
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
      if (marker) {
        return {...prev, [key]: marker};
      } else {
        const newMarkers = {...prev};
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  console.log(center, stores)
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <Map
        mapId='a24c61e9d9d8bbc2 '
        style={{ height: '40vh' }}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {
          stores.map((val) => {
            console.log(val.latitude)
            return <AdvancedMarker
            clickable={true}
              key={val.area}
              position={{ lat: val.latitude!==""?parseFloat(center?.lat):0, lng: val.longitude!==""?parseFloat(center?.lng):0 }}
              title={val.area}
              ref={marker => setMarkerRef(marker, val.area)}
            >
              <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
          })
        }
      </Map>

    </APIProvider>
  )
}



export default MapLocator;