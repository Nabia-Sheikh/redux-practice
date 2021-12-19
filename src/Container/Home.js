import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
             {/* <Link to={"/"}>Home</Link> */}
             <Link to={"/AddItem"}>Add</Link>
             {` `}
             <Link to={"/ListItem"}>List</Link>
        </div>
    )
}

export default Home
