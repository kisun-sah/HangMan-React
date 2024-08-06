/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import getButtonStyling from "./getButtonStyleType";

function Button({ buttonType, text, styleType, onClickHandler }) {
    return (
        <button 
            type={buttonType}
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(styleType)} text-white rounded-md transition-all`}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    buttonType: PropTypes.string,
    text: PropTypes.string.isRequired,
    styleType: PropTypes.string,
    onClickHandler: PropTypes.func
};

Button.defaultProps = {
    buttonType: 'button',
    styleType: 'default',
    onClickHandler: () => {}
};

export default Button;
