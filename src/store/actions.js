
import { SET_TODO_INPUT,ADD_TODO_LIST,REMOVE_TODO_LIST,UPDATE_TODO_LIST } from "./contant";

export const setTodoInput = function (payload) {
    return{
        type:SET_TODO_INPUT,
        payload,
    }
}
export const addTodoList = function (payload) {
    return{
        type:ADD_TODO_LIST,
        payload,
    }
}
export const removeTodoList = function (payload) {
    return{
        type:REMOVE_TODO_LIST,
        payload,
    }
}
export const upDateTodoList = function (payload) {
console.log(payload);
    return{
        type:UPDATE_TODO_LIST,
        payload,
    }
}

