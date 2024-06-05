import { useReducer,useRef } from "react";

import reduceTodo , {initStateTodo} from "./reducer";
import { addJob,removeJob,udateJob,setJob,udatelistJobs } from "./actionTodolist";
import logger from "./logger";



function TodoApp() {

    const [todo,dispatchTodo]=useReducer(logger(reduceTodo),initStateTodo)
    const inputRef = useRef()
    const idRef = useRef()


    const handelAddListTodo = function () {
        dispatchTodo(addJob(todo.job))
        dispatchTodo(setJob(''))
        inputRef.current.focus()
    }
    const handelremoveListTodo = function (id) {
        dispatchTodo(removeJob(id))

    }
    const handelupdateTodo = function (value,id) {
        dispatchTodo(setJob(value))
        dispatchTodo(udateJob(id))

    }
    const handelupdateListTodo = function (value) {
        console.log(value);
        dispatchTodo(udatelistJobs(value))
        dispatchTodo(setJob(''))


    }
    return(
    <div>

       <div>
        <h2>todo</h2>
        <input onChange={function (e) {
            dispatchTodo(setJob(e.target.value))
        }} 
        value={todo.job}
        ref={inputRef}
        placeholder={'Enter Todo ....'}></input>

        {todo.toggelBtn ?<button onClick={handelAddListTodo}>add</button>:<button onClick={function () {
            handelupdateListTodo({payload:inputRef.current.value,id:idRef.current})
        }}>update</button>}
        
        <ul>    
            { todo.listJobs.map(function (job,index) {
                return(
                    <li key={index}>{job} <span onClick={function () {
                        
                        handelremoveListTodo(index)
                    }}>&times;</span>
                    <p onClick={function () {
                        idRef.current = index
                        handelupdateTodo(job,index)
                    }}>sửa</p></li>
                )
            })}
        </ul>
       </div>



    </div>

)
}
export default TodoApp ; 