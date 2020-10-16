
import {load} from "redux-localstorage-simple";

let TASKS = load({namespace: "todo-list"});
if(!TASKS || !TASKS.tasks || !TASKS.tasks.length){
    TASKS = {
        tasks: []
    }
}

const tasks = (state = TASKS.tasks, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    date: action.date
                }
            ];
        case "REMOVE_TASK":
            return [...state].filter(task => task.id !== action.id);
        default:
            return state;
    }
}
export default tasks;