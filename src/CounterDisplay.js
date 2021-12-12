import React from 'react'
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
    const count = useSelector((state)=>state.counter)
    const myString = useSelector((state)=>state.str)

    
    return (
        <>
         <h3>Counter = {count}</h3>
         <h2>{myString}</h2>   
        </>
    )
}

export default CounterDisplay;
