import { useCallback,useState,useRef } from "react"
import Conten from "./conten.js";
function HookUseCallback(params) {
    const [count,setCount] = useState(0)
    const handleIncrease2 = useRef(function () {
        setCount(function (prevConut) {
            return(prevConut + 1)
        })
    })
    
    
    // const handleIncrease =useCallback(function () {
    //     setCount(function (prevConut) {
    //         return(prevConut + 1)
    //     })
    // },[])
    return(
    <>
        <Conten onIncrease={handleIncrease2.current}/>
        <h1>{count}</h1>
     
    </>
    )
}

export default HookUseCallback