import React, { useState } from 'react';
import MapGL, {
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';
import PlaceInfo from './place-info';

import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

import Markers from './markers';

import items from './items';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibmUtdHVtIiwiYSI6ImNrcno3ZGR4ZjE3aTQycHM3ZW9oMWUzMDMifQ.lVSIEZ859eMV2sR3cqhhqA';

const Map = () => {
    const [viewport, setViewport] = React.useState({
        latitude: 59.93951718539124,
        longitude: 30.31572335413375,
        zoom: 11
    });
    const [popupInfo, setPopupInfo] = useState(null);

    return (
        <div id="map">
            <MapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                width="100%"
                height="100%"
                onViewportChange={setViewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                {items && <Markers items={items} onClick={setPopupInfo}/>}

                {popupInfo && (
                    <Popup
                        tipSize={5}
                        anchor="top"
                        latitude={popupInfo.coordinates[0]}
                        longitude={popupInfo.coordinates[1]}
                        closeOnClick={false}
                        onClose={setPopupInfo}
                    >
                        <PlaceInfo {...popupInfo} />
                    </Popup>
                )}
            </MapGL>
        </div>
    )
}

export default Map;