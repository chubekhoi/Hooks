
import {addTodoAction,removeTodoAction,setTodoAction,updateTodoAction,updateTodoListAction} from "./constanst";

export const initStateTodo = {
    job:'',
    listJobs:[],
    toggelBtn: true
}

function reduceTodo(state,action) {

        
   switch (action.type) {
        case setTodoAction: 

        return  {
            ...state,
            job: action.payload
        } 
            
        case addTodoAction: 
        return  {
                //old state job = action.payload listJobs = []
                ...state,
                listJobs: [...state.listJobs,action.payload]
            } 
            
            case removeTodoAction: 
            const newJobs = [...state.listJobs]
            newJobs.splice(action.payload,1)
            return {
                ...state,
                listJobs : newJobs
            }
            
            case updateTodoAction: 
            console.log(action);
            return {
                ...state,
                toggelBtn:false
            }
            

            case updateTodoListAction: 
       
            const newTodoJobs = [...state.listJobs]
            newTodoJobs[action.payload.id] =action.payload.payload 
     
            return {
                ...state,
                listJobs:newTodoJobs,
                toggelBtn:true
            }
 
        default:
            break;

        }


}
export default reduceTodo