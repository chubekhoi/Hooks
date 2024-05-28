import { render } from '@testing-library/react';
import {useState} from 'react';

const orders = [100,200,300]

const gifts =[
    'ram 32 RBG',
    'cpu i9 13000',
    'keyboard RBG'
]
const courses= [
    {
        id:1,
        name:'html ,CSS'
    },
    {
        id:2,
        name:'javascip'
    },
    {
        id:3,
        name:'PHP , ruby'
    }
]

function HookUseState({children}) {
    const [counter,setCounter] = useState(function () {
        const total = orders.reduce(function (total,cur) {return(total + cur)});

        return(total);
    });
    const [infor,setInfor] = useState({
        name:'nguyen van A',
        age:18,
        address:'ha noi ,vn'
    })
    const [item,setItem] = useState('chưa có phần thưởng')

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [check,setCheck]=useState(1)
    const [checkBox,setCheckBox]=useState([])


    const handelClickIcrease =function () {
    setCounter( 
        function savecounter(preCounter) {
             return(preCounter + 1);
        });    
    };
    const handelClickUpdate = function () {
        setInfor(function (preincrease) {
            return({...preincrease,bio:'yeu mau vang '})
        })
    }
    const handelGetItem = function () {
        let mathRandom =  Math.floor(Math.random()* gifts.length);

       while (item == gifts[mathRandom]) {
        mathRandom =  Math.floor(Math.random()* gifts.length);
       }
        setItem(gifts[mathRandom])
    
        console.log(gifts[mathRandom]);
    }

    const handelImportName = function (e) {
        setName(e.target.value);
    }
    const handelSetName = function (e) {
        setName('nguyen van bbb')
    }
    const handelImporEmail = function (e) {
        setEmail(e.target.value)
    }
    const handelSubmit = function () {
        console.log({
            name,
            email
        });
    }
    const handelCheckRadio = function (course) {
        console.log(checkBox);
        setCheckBox(course.id)
    }

    const handelSubmitCheck = function () {
        console.log({
            id:check
        })
    }
    const handelCheckBox = function (course) {
        console.log(checkBox);
        let isChecked = checkBox.includes(course.id)
        if (isChecked) {
            console.log(123);
            setCheckBox(function (pre) {
                return(pre.filter(item => item != course.id))
            })

            // return(checkBox.filter(item => item != course.id))
        }else{
            setCheckBox(function (pre) {
                return([...pre,course.id])
            })
        }

    }
    const handelSubmitCheckBox = function () {
        console.log({
            id:check
        })
    }

    return(


         <div style={{padding: 20}}>
            <div style={{padding: 20}}>
                <h1 >{counter}</h1>
                <button onClick={handelClickIcrease}>Icrease</button>
               <h1>====================================================</h1>

            </div>
            <div style={{padding: 30}}>
                <div> 
                    <h1>{infor.name}</h1>
                    <h1>{infor.age}</h1>
                    <h1>{infor.address}</h1>
                    {infor.bio?<h1>{infor.bio}</h1>:null}
                    {/* <h1>{infor.bio?infor.bio:''}</h1> */}
                 </div>
                <button onClick={handelClickUpdate}>update</button>
               <h1>====================================================</h1>

            </div>
            <div style={{padding: 20}}>
                <h1 >{item}</h1>
                <button onClick={handelGetItem}>lầy thưởng</button>
               <h1>====================================================</h1>

            </div>
            <div style={{padding: 40}}>
               <input onChange={handelImportName} value={name}></input>
               <button onClick={handelSetName}>change me</button>
               <h1>====================================================</h1>
            </div>
            <div style={{padding: 40}}>
               <input onChange={handelImportName} placeholder='Name'></input>
               <input onChange={handelImporEmail} placeholder='Email'></input>
               <button onClick={handelSubmit}>Register</button>
            </div>
            <div style={{padding: 40}}>
            {courses.map(function (course) {
                return(
                <div key={course.id}>
                     <input type='radio'
                     checked ={course.id === check}
                     onChange={function (e) {
                        handelCheckRadio(course)
                     }}
                     
                     />{course.name}
                </div>
                )
               })}
               <button onClick={handelSubmitCheck}>change me</button>
               <h1>====================================================</h1>
            </div> 
            <div style={{padding: 40}}>
            {courses.map(function (course) {
                return(
                <div key={course.id}>
                     <input type='checkbox'
                     checked={checkBox.includes(course.id)}
                     onChange={function (e) {
                        handelCheckBox(course)
                     }}
                     
                     />{course.name}
                </div>
                )
               })}
               <button onClick={handelSubmitCheckBox}>change me</button>
               <h1>====================================================</h1>
            </div>


         </div>
    )

}
export default HookUseState;