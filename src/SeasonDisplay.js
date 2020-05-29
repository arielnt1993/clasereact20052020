import React from 'react';
import './seasonDisplay.css';



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

    const text = season === 'invierno'? 'hace frio':'hace calor';
    const icon = season === 'invierno'?  'snowflake icon':'sun icon'
    return (<div>{season}
        <h1>{text}<i className={`${icon}`}></i></h1>
    </div>);
};


export default SeasonDisplay;