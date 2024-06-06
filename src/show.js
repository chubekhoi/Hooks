import { useStore,actions } from "./store";
import { useRef,useState } from "react";
function Show() {
    const [state,dispatch] = useStore()
    const {todos,todoInput} = state
    const inputRef = useRef()
    const idRef = useRef()
    const [toggelAction,setToggelAction] = useState(true)

    const handleAdd =function () {
        dispatch(actions.addTodoList(todoInput))
                dispatch(actions.setTodoInput(''))
                inputRef.current.focus()
    }
    const handleRemove = function (id) {
        dispatch(actions.removeTodoList(id))
    }
    const handleToggel = function (value,id) {
        idRef.current = id
        dispatch(actions.setTodoInput(value))
        inputRef.current.focus()
            setToggelAction(function (prevToggel) {
                if (prevToggel === true) {

                    return prevToggel = false
                }
            })
    }
    const handleUpdate = function () {

    dispatch(actions.upDateTodoList({
        id:idRef.current,
        payload:inputRef.current.value
    }))

    dispatch(actions.setTodoInput(''))
    setToggelAction(function (prevToggel) {
        if (prevToggel === false || prevToggel ===undefined) {

            return prevToggel = true
        }
    })

    }
    console.log(toggelAction);
    return(
        <div>
            <input ref={inputRef} value={todoInput} placeholder="Enter todo" 
            onChange={function (e) {
                dispatch(actions.setTodoInput(e.target.value))
            }}
            
            ></input>
            {toggelAction ? <button onClick={handleAdd}>add</button>: <button onClick={handleUpdate}>update</button> }
            <ul>
            {todos.map(function (todo,index) {
                return(<li key={index}>{todo}<button
                    onClick={function () {
                        handleRemove(index)
                    }}
                    style={{margin: 20}}>&times;</button><button onClick={
                        function () {
                            handleToggel(todo,index)
                        }
                    }>Sửa</button></li>
            )
            })}
            </ul>
        </div>
    )    
}
export default Show ;