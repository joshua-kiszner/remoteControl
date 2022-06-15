import PropTypes from 'prop-types';
import "./Altimeter.css";


const Altimeter = (props) => {
  const { altitude } = props;

  return (
    <div className="altitude">

      <div className="altimeter">
        <span style={{ position: "absolute", top: -2.5, right: "50%", transform: "translateX(+50%) " }}>3000</span>
        <span style={{ position: "absolute", top: "33.333%", right: "50%", transform: "translateY(-50%) translateX(+50%) " }}>2000</span>
        <span style={{ position: "absolute", bottom: "33.333%", right: "50%", transform: "translateY(+50%) translateX(+50%) " }}>1000</span>
        <span style={{ position: "absolute", bottom: -2.5, right: "50%", transform:" translateX(+50%) " }}>0</span>

      </div>
      <span style={{ position: "absolute", right: "50%", transition: "transform 500ms ease-in-out 25ms", transform: `translateY(${-altitude / 10}px) translateY(+50%) translateX(+50%)`, backgroundColor: "red", height: "10px", width: "80px", display: "block" }}></span>

    </div>
  );
}

Altimeter.defaultProps = {
  altitude: 0
}

Altimeter.prototype = {
  altitude: PropTypes.number,
}
export default Altimeter;
