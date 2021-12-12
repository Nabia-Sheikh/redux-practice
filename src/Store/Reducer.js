import React from 'react'



const initialState = {
    counter: 0,
    data: [],
    str: "redux class"
};

const myReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            }
        case 'changeString':
            return {
                ...state,
                str: "It has been changed"
            }
        case 'addItem':
            return{
                ...state,
                data: ['Nabia ','24 Years old']
            }
        default:
            return state;
    }


}

export default myReducer;
