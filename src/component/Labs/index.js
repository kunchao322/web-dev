import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./redux-examples";

function Index() {
    return (
        <>
            <h1>Labs</h1>
            <Link to='/hello/'>HelloWorld</Link> |
            <Link to='/tuiter/home'>Tuiter</Link>
            <ReduxExamples/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
}

export default Index