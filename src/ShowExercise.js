import  {useState} from 'react'
import  HookUseState  from "./useState.js";

function ShowExerciseUseState({children}) {
    const [nameShow,setNameShow] = useState('showUseState')
    const [show,setShow] = useState(false)
    const handleShow = function () {
        if (!show) {
            setNameShow('unshow')
        }else{
            setNameShow('showUseState')

        }
        setShow(!show)
    }
    return(
        <div>
            <button onClick={handleShow}>{nameShow}</button>
            {show ? <HookUseState></HookUseState> : null}
            
        </div>
    )
}
export default ShowExerciseUseState ; 