import React from "react";
import propTypes from "prop-types";

const ToDoInput = ({ value, onChange }) => (
    <div>
        <input onChange={onChange} value={value} />
    </div>
)

ToDoInput.propTypes = {
    onChange: propTypes.func,
    value: propTypes.string
}

ToDoInput.defaultProps = {
    onChange: () => { },
    value: ""
}

export default ToDoInput;