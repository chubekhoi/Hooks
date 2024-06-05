import {addTodoAction,removeTodoAction,setTodoAction,updateTodoAction,updateTodoListAction} from "./constanst";

export const setJob = function (value) {
    return {
      type:setTodoAction,
      payload:value,
      typeBtn:true
  }
}
export const addJob = function (value) {
  return {
    type:addTodoAction,
    payload:value,
    typeBtn:true
}
}
export const removeJob = function (value) {
  return {
    type:removeTodoAction,
    payload:value,
    typeBtn:true

}
}
export const udateJob = function (value) {
  return {
    type:updateTodoAction,
    payload:value,
    typeBtn:false

}
}
export const udatelistJobs = function (value) {
  return {
    type:updateTodoListAction,
    payload:value,
    typeBtn:true

}
}