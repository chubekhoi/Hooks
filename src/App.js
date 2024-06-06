import  {useState} from 'react'

import  HookUseReducer  from "./useReducer.js";
import  HookUseContext  from "./useContext.js";
import ThemeContext from "./themeContext.js";
import ShowExerciseUseState  from "./ShowExercise.js";
import Show from "./show.js";
import {StoreProvider} from "./store";

import  "./App.css";
function App() {
  const [show,setShow] = useState(false)
  const handleShow = function () {
    setShow(!show)

  }
  return(
    <div style={{padding : 50}}>
        <div>
            <button onClick={handleShow}>toggel</button>
            {show ?<StoreProvider><Show></Show></StoreProvider>: null}
        </div>
    </div>

  )

}

export default App;
