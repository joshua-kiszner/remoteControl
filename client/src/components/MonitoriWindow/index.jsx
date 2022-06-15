 import React from 'react'
import Altimeter from "../Altimeter";
import His from "../His";
import ADI from "../ADI";
import "./MonitoriWindow.css"

const MonitoriWindow = (props) => {
   const {coordiantes}=props;
   return (
    <div className="monitor-window">
          <Altimeter altitude={coordiantes.altitude} />
          <His his={coordiantes.his} />
          <ADI adi={coordiantes.adi} />
    </div>
   )
 }
 
export default MonitoriWindow
 
 
