import  {useState} from 'react'

import  HookUseEffect  from './useEffect.js';
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
            {show ? <HookUseEffect></HookUseEffect> : null}
        </div>
    </div>

  )

}

export default App;
