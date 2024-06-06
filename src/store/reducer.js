import { SET_TODO_INPUT,ADD_TODO_LIST,REMOVE_TODO_LIST, UPDATE_TODO_LIST } from "./contant";
const initState = {
    todos:[],
    todoInput:'',
}
function reducer(state,action) {
    switch (action.type) {
     case SET_TODO_INPUT:
        return{
            ...state,
        todoInput:action.payload
        }
        break;
        case ADD_TODO_LIST:
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
            break;
            case REMOVE_TODO_LIST:
                const newTodos  =  [...state.todos]
                newTodos.splice(action.payload,1)
                return{
                    ...state,
                    todos:newTodos
                }
            case UPDATE_TODO_LIST:

                    const newJobTodos =  [...state.todos]
                    newJobTodos[action.payload.id] = action.payload.payload
                    return{
                        ...state,
                        todos:newJobTodos
                }
                break;

        default:
            throw  new Error('invalit Action')
    }
}
export {initState}
export default reducer;