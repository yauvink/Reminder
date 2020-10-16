import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { Button } from '@material-ui/core';


const ToDoItem = ({ text, date, removeTask, id }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setCount(count + 1)
        }, 60000);
    }, [count]);


    function getRemainingTime(date) {
        let diff = (new Date(date) - new Date()) / 1000;
        if (diff < 0) {
            return "event passed"
        }
        diff = Math.abs(Math.floor(diff));

        let days = Math.floor(diff / (24 * 60 * 60));
        let leftSec = diff - days * 24 * 60 * 60;

        let hrs = Math.floor(leftSec / (60 * 60));
        leftSec = leftSec - hrs * 60 * 60;

        let min = Math.floor(leftSec / (60));
        leftSec = leftSec - min * 60;

        return ((days ? days + "d " : "") + (hrs ? hrs + "h " : "") + (min ? min + "m " : ""))
    }

    function getColor(date) {
        let diff = (new Date(date) - new Date()) / 1000;
        switch (true) {
            case diff < (60 * 60):
                return "red";
            case diff >= (60 * 60) && diff < (24 * 60 * 60):
                return "yellow";
            default:
                return "green"
        }
    }
    return (
        <li className="listItem">
            <div className={getColor(date)}>
                <div className="dateWrapper">
                    <span>{getRemainingTime(date)}</span>
                </div>
                <div className="textWrapper">
                    <span>{text}</span>
                </div>
                <div>
                    <Button onClick={() => removeTask(id)} variant="contained" color="primary">Delete</Button>
                </div>
            </div>
        </li>
    );
};


ToDoItem.propTypes = {
    text: propTypes.string,
    date: propTypes.string,
    removeTask: propTypes.func,
    id: propTypes.number
}

ToDoItem.defaultProps = {
    text: "",
    date: "",
    removeTask: () => { },
    id: 0
}

export default ToDoItem;