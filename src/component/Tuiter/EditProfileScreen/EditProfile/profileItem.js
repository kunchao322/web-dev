import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos
        = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }


    return(
        <>
            <h3>Todos</h3>
            <form>
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            <input checked={todo.done}
                                   onChange={(event) =>
                                       updateTodoClickHandler(
                                           {...todo,
                                               done: event.target.checked})}
                                   type="checkbox"/>

                            {todo.do}
                            <button onClick={() =>
                                deleteTodoClickHandler(todo)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>
                    )
                }
            </form>
        </>
    );
};
export default Todos;
