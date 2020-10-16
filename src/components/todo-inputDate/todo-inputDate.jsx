import React from "react";
import propTypes from "prop-types";
import { TextField } from '@material-ui/core';

const ToDoInputDate = ({ value, onChange }) => (
    <div>
        <TextField
            id="datetime-local"
            type="datetime-local"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={onChange}
            value={value}
        />
    </div>
)

ToDoInputDate.propTypes = {
    onChange: propTypes.func,
    value: propTypes.string
}

ToDoInputDate.defaultProps = {
    onChange: () => { },
    value: ""
}

export default ToDoInputDate;