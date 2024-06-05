import { memo } from "react";

function Conten({onIncrease}) {

        console.log('re-render');
    return(
        <>
        <button onClick={onIncrease}>click!</button>
        <h1>xin chao</h1>
        </>

)
}

export default memo(Conten);