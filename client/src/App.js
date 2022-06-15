import { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import MonitoriWindow from "./components/MonitoriWindow";
import Buttons from "./components/Buttons"
import MonitorText from "./components/MonitorText";


import './App.css';

function App() {
  const [visual, setVisual] = useState({
    visual: true
  })
  const [coordiantes, setCoordinates] = useState({
    altitude:0,
    his:0,
    adi:0
  })
  useEffect(() => {
    const socket = socketIOClient(`http://localhost:${3001}`, {
      path: '/',
    });

    socket.on("connect", () => {
      console.log("Connected");
    });
    socket.on("connect_failed", () => {
      console.log("Connection Failed");
    });

    socket.on("new-coordinates", (nextCoordinates) => {
      setCoordinates(nextCoordinates);
    });

    return () => {
      socket.disconnect();
    };
  }, [])
  return (
    <div className="App">
      <div className="main" >
        <Buttons setVisual = {setVisual}/>
        {
          console.log(coordiantes)}
          {
          visual ? (
            <MonitoriWindow coordiantes={coordiantes} />) : (
            <MonitorText coordiantes={coordiantes} />)
        }
      </div>

    </div>
  );
}

export default App;
