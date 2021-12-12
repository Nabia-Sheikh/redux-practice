import React from 'react'
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
    const count = useSelector((state)=>state.counter)
    
    return (
        <>
         <h3>Counter = {count}</h3>   
        </>
    )
}

export default CounterDisplay;
