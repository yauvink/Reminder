export const addTask = (id, text, date) => ({
    type: "ADD_TASK",
    id,
    text,
    date
})

export const removeTask = (id) => ({
    type: "REMOVE_TASK",
    id
})