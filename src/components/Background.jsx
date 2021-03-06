
import PropTypes from 'prop-types';

export const Background = ({ ...props }) => {
    let obStyle = { border: "0.5px solid rgba(255, 255, 255, 0.26)" };
    if (props.width) obStyle.width = props.width;
    if (props.height) obStyle.height = props.height;
    let className = "bg-black bg-opacity-10 rounded-xl w-full h-full " + props.className || "";
    return (<div className={className} style={obStyle}>{props.children}</div>)
}

Background.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};


Background.defaultProps = {
    width: "200px",
    height: "200px",
};