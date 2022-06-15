import PropTypes from 'prop-types'
import "./Adi.css"

const ADI = (props) => {
    const { adi } = props;

    return (
        <div className="adi">
            <div style={{ backgroundColor: "blue", height: `${50 + (adi / 2)}%` }}></div>
            <div style={{ backgroundColor: "green", height: `${50 - (adi / 2)}%` }}></div>
        </div>
    );
}

ADI.defaultProps = {
    adi: 0
}

ADI.prototype = {
    adi: PropTypes.number,
}
export default ADI;