import  {useState} from 'react'

import  HookUseReducer  from "./useReducer.js";
import ShowExerciseUseState  from "./ShowExercise.js";
function App() {
  const [show,setShow] = useState(false)
  const handleShow = function () {
    setShow(!show)

  }
  return(
    <div style={{padding : 50}}>
        <div>
            <button onClick={handleShow}>toggel</button>
            {show ? <HookUseReducer></HookUseReducer> : null}
        </div>
    </div>

  )

}

export default App;
