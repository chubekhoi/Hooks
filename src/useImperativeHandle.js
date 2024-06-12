import { useEffect,useRef, useState } from "react";
import Video from "./Video";


function HookUseImperativeHandle() {
    const videoRef = useRef()
    const [theme,setTheme]=useState(false)
    useEffect(function () {
        console.log(videoRef.current);
    })

    const handleToggelVideo = function () {
        videoRef.current.handleToggelVideo()
        setTheme(theme=== false?true:false)
    }


    return(<div>

        <Video ref={videoRef}></Video>
        <br/>
        {theme===false? <button onClick={handleToggelVideo}>play</button>:<button onClick={handleToggelVideo}>pause</button>}


    </div>)
}

export default HookUseImperativeHandle