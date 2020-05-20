import React from 'react';

const getSeason = (lat,month) => {
    if(month > 2 && month <9){
        return lat > 0 ? 'verano' : 'invierno';
    } else {
        return lat > 0 ? 'invierno' : 'verano';
    }
}

function SeasonDisplay(props){
    const fecha = new Date()

    const season = getSeason(props.lat,fecha.getMonth());
    return <div>{season}</div>
};


export default SeasonDisplay;