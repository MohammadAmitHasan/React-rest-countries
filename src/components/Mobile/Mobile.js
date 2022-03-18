import React, { useState } from 'react';
import './Mobile.css'
const Mobile = () => {
    const [battery, setBattery] = useState(100);
    const batteryDown = () => battery > 0 ? setBattery(battery - 10) : setBattery('Mobile Turned Off');
    return (
        <div id='mobile'>
            <h2>
                {battery}
            </h2>
            <button onClick={batteryDown}>Battery Down</button>
        </div>
    );
};

export default Mobile;