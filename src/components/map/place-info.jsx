import * as React from 'react';

import './place-info.css';

const PlaceInfo = ({ title, rate, cost, description, insta, address }) => {
    console.log(title, rate, cost, description, insta, address)

    return (
        <div className="place-info">
            <p className="place-info__title">{title}</p>
        </div>
    );
}

export default PlaceInfo;