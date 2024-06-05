import { useState,useMemo,useRef } from "react";

function HookUseMemo() {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [products,setProducts]=useState([]);
    const nameRef =useRef()
    ///////////////////
    const total = useMemo(function () {
        const result = products.reduce(function (result,prod) {
            console.log('tinh lai');
            return(result + prod.price)
        },0)

        return(result)
    },[products])

    const handleAddproducts = function () {
        setProducts(function (prevProducts) {
            const objValue = {
                name:name,
                price:Number(price),
            }
            return([...prevProducts,objValue])
        })
        setName('');
        setPrice('');
        nameRef.current.focus()
    }
    return(
        <>
        <br/>
        <input placeholder="Name" 
        ref={nameRef}
        onChange={function (e) {
            setName(e.target.value)
        }}value={name}></input>
        <br/>
        <input placeholder="price"onChange={function (e) {
            setPrice(e.target.value)
        }}value={price}></input>
        <br/>
        <button onClick={handleAddproducts}>add</button>
        <br/>
        <div>
            <p>total:{total}</p>
            <ul>
                { products.map(function (product,index) {
                    return(<li key={index}>{product.name}-{product.price}</li>)
                })}
            </ul>
        </div>
        </>
    )
}
export default HookUseMemo ;