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
            
                const newbook = []
                newbook.push(action.payload)
               
        default:
            return{
                ...state,
                books: [...state.books, ...newbook]
            } 
    }


}

export default myReducer;
