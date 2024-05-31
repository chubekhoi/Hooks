import { useEffect,useState } from "react";
//1 . useEffect(callback)
//-gọi callback mỗi khi component re-render
//-gọi callback sau khi element mounted vào DOM
//2 . useEffect(callbacl,[])
//2 . chỉ gọi callback chỉ gọi 1 lần khi component mouted
//3 . useEffect(callbacl,[deps])
//3 . callback sẽ đc gọi lại khi deps thây đổi
//---------------------------------
//1 . callback luôn đc chạy khi component mounted (lý thuyết này luôn đúng cho cả 3 cách use)
//2 . clean up function luôn đc gọi trước khi component unmouted

const tabs = ['posts','albums','comments']
const lessonLists = [
    {
    title : 'ReactJs là gì? Tại sao học React Js phần 1',
    id:1
    },
    {
    title : 'ReactJs là gì? Tại sao học React Js phần 2',
    id:2
    },
    {
    title : 'ReactJs là gì? Tại sao học React Js phần 3',
    id:3    
    }   
,]
function HookUseEffect() {
    const [type,setType]=useState('')
    const [items,setItems]=useState([])
    const [showGoToTop,setShowGoToTop] = useState(false)
    const [witd,setWitd]=useState(window.innerWidth)
    const [countdown,setCountdown] = useState(180)
    const [avatar,setAvatar] = useState()
    const [lessonId,setLessonId]= useState(1)
    const [showCourse,setShowCourse]= useState(false)

    useEffect(function () {
        if (type === '') {
            setItems([])
        }else{
            fetch('https://jsonplaceholder.typicode.com/'+type+'')
            .then(response => response.json())
            .then(json => setItems(json))
        }

    },[type])
   

    useEffect(function () {
        const handelScroll = function () {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            }else{
                setShowGoToTop(false);
            }
        }
        const handelResize = function () {
            setWitd(window.innerWidth)
        }

        const timerId = setInterval(() => {
            setCountdown(function (preSate) {
            
               return(preSate - 1) 
            })
        }, 1000);

        console.log('mounted even ');
        window.addEventListener('scroll',handelScroll);
        window.addEventListener('resize',handelResize);
        //clean up
        return function () {
        console.log('remove even ');
        window.removeEventListener('scroll',handelScroll);
        window.removeEventListener('resize',handelResize);
        clearInterval(timerId);
        
        }
    },[])
    useEffect(function () {
        
        return function () {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])


    useEffect(function () {
        const handelComment = function ({detail}) {
            console.log(detail);
        }
        console.log(showCourse);
        if (showCourse) {
            
            window.addEventListener('lesson-'+lessonId+'',handelComment) 
        }
            

        
        return function () {
        window.removeEventListener('lesson-'+lessonId+'',handelComment)
            
        }
    },[lessonId,showCourse])




    const handelSetType = function (tab) {
        setType(tab)
    }
    const handelToggelList = function () {
        setType('')
    }
    const handelScrollGototTop = function (e) {
        
    }
    const handelPreviewAvatar = function (e) {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file)
    }
    const handelSetLessonId = function (id) {
        setLessonId(id)
    }
    const handelToggelCourse = function () {
        setShowCourse(function (preShow) {
            return !preShow
        })
        
    }


    return(
        <div>
            <div>

          {tabs.map(function (tab) {
            return(<button
            style={type === tab ?{color:'#fff',backgroundColor:'#333'} : {} }
                onClick={function () {handelSetType(tab)}}
                 key={tab}>{tab}</button>)
            })}
            
            <button onClick={handelToggelList}> toggel list</button>
            </div>

          <ul>
            {items.map(function (item) {
                return(
                <li key={item.id}>{item.title || item.name}</li>
                )
            })}
          </ul>
          {showGoToTop ? <button
          style={{
            position:'fixed',
            right:'20px',
            bottom:'20px',
          }} 
          onClick={handelScrollGototTop}>go to top</button> : null }
        <h1>{witd}</h1>

        <h1>{countdown}</h1>
          <input type="file"
          onChange={handelPreviewAvatar}
          ></input>
          {avatar && (<img src={avatar.preview} width='40%'></img>)}
          
          <button onClick={handelToggelCourse}>toggel khóa học</button>
          {showCourse ?<ul>
                {lessonLists.map(function (lesson) {
                    return(<li 
                        style={{color: lesson.id === lessonId ? 'red':'#333'}}
                        key={lesson.id}

                        onClick={function (e) {
                            handelSetLessonId(lesson.id)
                        }}
                        > {lesson.title} </li>)
                })}
            </ul>: null }
            
      
        </div>
    )
}
export default HookUseEffect;