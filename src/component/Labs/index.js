import React from "react";
import {Link} from "react-router-dom";

function Index() {
    return (
        <>
            <h1>Labs</h1>
            <Link to='/hello'>HelloWorld</Link> |
            <Link to='/tuiter'>Tuiter</Link>
        </>

    )
}

export default Index