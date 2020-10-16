import React, { Component } from "react";
import ToDoInput from "../../components/todo-input/todo-input";
import ToDoInputDate from "../../components/todo-inputDate/todo-inputDate";
import ToDoList from "../../components/todo-list/todo-list";
import { connect } from "react-redux";
import { addTask, removeTask } from "../../actions/actionCreator"
import { Button } from '@material-ui/core';

class ToDo extends Component {
    state = {
        taskText: "",
        taskDate: ""
    }
    handleInputChange = ({ target: { value } }) => {
        this.setState({
            taskText: value
        })
    }
    handleInputDateChange = ({ target: { value } }) => {
        this.setState({
            taskDate: value
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();

        const { taskText, taskDate } = this.state;

        const { addTask } = this.props;

        addTask((new Date()).getTime(), taskText, taskDate)

        this.setState({
            taskText: "",
            taskDate: ""
        })
    }

    render() {
        const { taskText, taskDate } = this.state;
        const { tasks, removeTask } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit} className="form">
                    <div>
                        <span>Name:</span>
                        <ToDoInput onChange={this.handleInputChange} value={taskText} />
                    </div>
                    <div>
                        <span>Date:</span>
                        <ToDoInputDate onChange={this.handleInputDateChange} value={taskDate} />
                    </div>
                    <Button type="submit" color="primary" variant="contained">Submit</Button>
                </form>
                {isTasksExist && <ToDoList tasksList={tasks} removeTask={removeTask} />}
            </div>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks
}), { addTask, removeTask })(ToDo);