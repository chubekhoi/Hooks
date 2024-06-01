import  {useEffect, useState} from 'react'
import  HookUseState  from "./useState.js";
import  HookUseEffect  from "./useEffect.js";
const listCourses = ['showUseState','showUseEffect','testNew']
function ShowExerciseUseState({children}) {

    const [nameShow,setNameShow] = useState('showUseState')
    const [idCourse,setIdCourse] = useState(0)
    const [show,setShow] = useState(false)

    const [TabName,setTabName] =  useState()

    const handleShow = function ( id) {
        console.log(id);
        setIdCourse(id)
            
    } 
    const handelShowTabName = function () {

    }
    
    return(
        <div>
            {listCourses.map(function (listCourse,index) {
                return(<button key={index} onClick={function () {
                    handleShow(index)
                }}>{listCourse}</button>)
            })}
            
            <div className='tabName'>
         
            { idCourse == 0 ? <HookUseState/> : idCourse == 1 ? <HookUseEffect/>: idCourse == 2 ? <div>xin chao</div> : {} }


            </div>
        </div>
    )
}
export default ShowExerciseUseState ; 