import { useSelector } from "react-redux"
import React from 'react'

const ListItem = () => {
    const books = useSelector(state=>state.books)
    return (

        <div>
            {books && books.map(
                item => (
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.prize}</p>
                        </div>
                )
            )}
        </div>
    )
}

export default ListItem
