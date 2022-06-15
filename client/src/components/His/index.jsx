import PropTypes from 'prop-types';
import "./His.css"

const HIS = (props) => {
    const { his } = props;

    return (
        <div className="his" style={{ transform: `rotate(${-his}deg)` }}>
            
            <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}>270</span>
            <span style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0 }}>0</span>            
            <span style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>90</span>
            <span style={{ position: "absolute", right: "50%", transform: "translateX(+50%)", bottom: 0} }>180</span>
            <span style={{ position: "absolute", left: "50%", transform: `translateX(-50%) translateY(-50%) rotate(${his}deg)`, top: "50%", fontSize: "3em", }}>&#8593;</span>

        </div>
    )
}

HIS.defaultProps = {
    his: 0
}

HIS.prototype = {
    his: PropTypes.number,
}
export default HIS;