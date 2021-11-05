import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

import Markers from './markers';

import items from './items';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibmUtdHVtIiwiYSI6ImNrcno3ZGR4ZjE3aTQycHM3ZW9oMWUzMDMifQ.lVSIEZ859eMV2sR3cqhhqA';


const Map = () => {
    const mapContainerRef = useRef(null);

    const [map, setMap] = useState(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            accessToken: MAPBOX_TOKEN,
            style: "mapbox://styles/mapbox/streets-v11",
            // Empire State Building [lng, lat]
            center: [30.31572335413375, 59.93951718539124],
            zoom: 11,
        })
        map.addControl(new mapboxgl.NavigationControl(), "top-right");

        setMap(map);

        return () => map.remove();
    }, [])

    return <div ref={mapContainerRef} className={'map'}>
        {items && map && <Markers map={map} places={items} />}
    </div>
};

export default Map;