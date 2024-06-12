import video1 from "./videos/video-1.mp4";
import { forwardRef,useImperativeHandle, useRef,useState } from "react";
function Video(props,ref) {
    const videoRef = useRef()
    const [toggle,setToggle] = useState(false)

    useImperativeHandle(ref,function () {
        return{
             handleToggelVideo : function () {
                if (toggle===false) {
        
                    videoRef.current.play()
                }else{
                    videoRef.current.pause()
        
        
                }
                setToggle(toggle === false?true:false)
            }

        }
    })

    return(
        <video  ref={videoRef} width={200} src={video1}></video>
    )
}
export default forwardRef(Video);