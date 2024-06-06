import { useReducer } from "react";
import reducer,{ initState } from "./reducer";
import Context from "./context";
import logger from "./logger";

function Provider({children}) {
    const [sate,dispatch]= useReducer(logger(reducer),initState)
    return(
        <Context.Provider value={[sate,dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider