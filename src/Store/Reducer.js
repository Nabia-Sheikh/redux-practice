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
        case 'LIST':
            return state.books;
            
        case 'ADDBOOK':
                console.log(action.payload);
                const newbook = []
                newbook.push(action.payload)
                return{
                    ...state,
                    books: [...state.books, ...newbook]
                }
               
        default:
            return state
    }


}

export default myReducer;
