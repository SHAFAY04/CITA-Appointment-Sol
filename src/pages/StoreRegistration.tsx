import React, { useCallback, useState } from 'react'
import { AwesomeButton } from "react-awesome-button";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const StoreRegistration = () => {

    const [storeLocation, setStoreLocation] = useState({ lat: 37.7749, lng: -122.4194 });
    const [isMarkerDragged, setIsMarkerDragged] = useState(false);
    
    //used useCallBack to memoize handlemarkerdrag function so that it doesnt gets recreated on every time the marker moves which would cause unncessary rerenders of the map or the market
    const handleMarkerDragEnd = useCallback((e:google.maps.MapMouseEvent) => {
        if(e.latLng){
            setStoreLocation({
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              });
              setIsMarkerDragged(true);
        }
        
      }, []);
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Store Location:', storeLocation,isMarkerDragged);
        // Send the store location to your backend
      };
    return (
        <LoadScript googleMapsApiKey="AIzaSyDzp2gGPEiOpW8gRxGUx_4xPWM_cLwrZYg">
          <div>
            <h3>Pick Location!</h3>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={storeLocation}
              zoom={12}
            >
              <Marker
                position={storeLocation}
                onDragEnd={handleMarkerDragEnd}
                draggable
              />
            </GoogleMap>
            <form onSubmit={handleSubmit}>
              <AwesomeButton type="submit">Register Store</AwesomeButton>
            </form>
          </div>
        </LoadScript>
      );
}

export default StoreRegistration