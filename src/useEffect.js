import { useEffect,useState } from "react";
//1 . useEffect(callback)
//-gọi callback mỗi khi component re-render
//-gọi callback sau khi element mounted vào DOM
//2 . useEffect(callbacl,[])
//3 . useEffect(callbacl,[deps])
//---------------------------------
//1 . callback luôn đc chạy khi component mounted (lý thuyết này luôn đúng cho cả 3 cách use)
//2 . chỉ gọi callback chỉ gọi 1 lần khi component mouted
//3 . callback sẽ đc gọi lạ khi deps thây đổi

const tabs = ['posts','albums','comments']
function HookUseEffect() {
    const [type,setType]=useState('')
    const [items,setItems]=useState([])
    useEffect(function () {
        if (type == '') {
            
        }else{
            fetch('https://jsonplaceholder.typicode.com/'+type+'')
            .then(response => response.json())
            .then(json => setItems(json))
        }

    },[type])
    const handelSetType = function (tab) {
        setType(tab)
    }
    return(
        <div>
          {tabs.map(function (tab) {
            return(<button
            style={type === tab ?{color:'#fff',backgroundColor:'#333'} : {} }
                onClick={function () {handelSetType(tab)}}
                 key={tab}>{tab}</button>)
          })}
          <ul>
            {items.map(function (item) {
                return(<li key={item.id}>{item.title || item.name}</li>)
            })}
          </ul>
        </div>
    )
}
export default HookUseEffect;