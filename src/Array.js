import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Array = () => {
    const myArray = useSelector((state)=>state.data)
    const dispatch = useDispatch();
    return (
        <div>
          <h2>{myArray}</h2>
          <button onClick ={()=>dispatch({type:"addItem"})}>AddItem</button>  
        </div>
    )
}

export default Array
