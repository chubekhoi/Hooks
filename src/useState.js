import {useState} from 'react';

const orders = [100,200,300]

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

    return(


         <div style={{padding: 20}}>
            <div style={{padding: 20}}>
                <h1 >{counter}</h1>
                <button onClick={handelClickIcrease}>Icrease</button>
            </div>
            <div style={{padding: 30}}>
                <div> 
                    <h1>{infor.name}</h1>
                    <h1>{infor.age}</h1>
                    <h1>{infor.address}</h1>
                    <h1>{infor.bio || ''}</h1>
                 </div>
                <button onClick={handelClickUpdate}>update</button>
            </div>


         </div>
    )

}
export default HookUseState;