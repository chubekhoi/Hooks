import  {useState} from 'react'

import  HookUseReducer  from "./useReducer.js";
import  HookUseContext  from "./useContext.js";
import ThemeContext from "./themeContext.js";
import ShowExerciseUseState  from "./ShowExercise.js";
import HookUseImperativeHandle from "./useImperativeHandle.js";
import Show from "./show.js";
import {StoreProvider} from "./store";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph/index.js";
import GlobalStyles from "./components/GlobalStyles";
import Button from "./components/Button";
// import Paragraph from "./components/Paragraph";
import Home from "./pages/Home.js";
import New from "./pages/New.js";
import Contact from "./pages/Contact.js";
import { Routes,Route,Link } from "react-router-dom";
import  "./App.css";
function App() {

  return(

    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/New'>New</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/New' element={<New></New>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  )

}

export default App;
