import React from "react";
import {Link} from "react-router-dom";

function Index(){
    return (
    <>
        <h1>Tuiter</h1>
        <Link to="/hello">HelloWorld</Link> |
        <Link to="/"> Labs</Link>
    </>
    )
}

export default Index;