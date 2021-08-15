import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Marker = ({ map, place }) => {
    const markerRef = useRef();

    useEffect(() => {
        const marker = new mapboxgl.Marker(markerRef)
            .setLngLat([place.coordinates[1], place.coordinates[0]])
            .addTo(map);

        return () => marker.remove();
    })

    return <div ref={markerRef} />
};

const Markers = ({ map, places }) => {
    return (
        <>
            {places &&
            places.map(place => (
                <Marker key={place.title.split(' ').join('-')} map={map} place={place} />
            ))}
        </>
    );
};

export default Markers;