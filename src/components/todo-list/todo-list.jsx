import React from "react";
import propTypes from "prop-types";
import ToDoItem from "../todo-item/todo-item";

const ToDoList = ({ tasksList, removeTask }) => (
    <ul className="list">
        {tasksList.map(({ id, text, date }) => (
            <ToDoItem removeTask={removeTask} id={id} key={id} text={text} date={date} ></ToDoItem>
        ))}
    </ul>
)

ToDoList.propTypes = {
    tasksList: propTypes.array,
    removeTask: propTypes.func
}

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => { }
}

export default ToDoList;