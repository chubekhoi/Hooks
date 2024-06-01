import { useRef, useState,useEffect,memo } from "react";

function HookUseRef(params) {
    const [time,setTime] = useState(60)
    // const [timeId,setTimeId] = useState()
    const [timeOld,setTimeOLd]= useState()
    const timeId = useRef()
    const oldTime = useRef()
    const handelStart = function () {
        console.log(timeId.current);
        timeId.current = setInterval(() => {
            
            setTime(function (prevTime) {
                // setTimeOLd(prevTime)
                return(prevTime - 1)
            })
        }, 1000);
        // setTimeId(function (prevTimeId) {
        //     prevTimeId = setInterval(() => {
        //         console.log(prevTimeId);
        //         setTime(function (prevTime) {
        //             return  (prevTime - 1)
        //         })
        //     }, 1000);
            // return (prevTimeId)
        // })
    }
        useEffect(function () {
            oldTime.current = time
        },[time])

        console.log(time,oldTime.current);

    const handelStop = function () {
        clearInterval(timeId.current)

    }
    return(
        <div>
            <h1>{time}</h1>
            <button onClick={handelStart}>start</button>
            <button onClick={handelStop}>stop</button>
        </div>
    )
}

export default HookUseRef;