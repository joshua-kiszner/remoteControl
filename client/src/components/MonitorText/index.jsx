import React from 'react';
import './MonitorText.css'

const MonitorText = (props) => {
    const {coordiantes} = props;
    return (
    <div className='text'>
        <p>
            altitude:{coordiantes.altitude}
        </p>
        <p>
            HIS:{coordiantes.his}
        </p>
        <p>
            ADI:{coordiantes.adi}
        </p>
    </div>
    )
}

export default MonitorText