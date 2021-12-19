import React from 'react'



const initialState = {
    books: [
        {
            title: "harray potter",
            prize: 500
        },
        {
            title: "harray potter 2",
            prize: 600
        }
    ]
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
            return {
                ...state,
                data: [...'Nabia ', '24 Years old']
            }
        default:
            return state;
    }


}

export default myReducer;
