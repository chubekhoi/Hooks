import  {useState} from 'react'
import HookUseRef from './useRef.js';
import HookUseEffect from './useRef.js';
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
            {show ? <ShowExerciseUseState><HookUseRef></HookUseRef></ShowExerciseUseState> : null}
        </div>
    </div>

  )

}

export default App;
