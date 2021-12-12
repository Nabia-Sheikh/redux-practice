import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';


const CounterInput = () => {

    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch();
    
    return (
        <div>
           <button onClick ={()=>dispatch({type:"INCREMENT"})}>+</button> 
           <button onClick ={()=>dispatch({type:"DECREMENT"})}>-</button> 
        </div>
    )
}

export default CounterInput;
