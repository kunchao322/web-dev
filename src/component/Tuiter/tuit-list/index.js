import TuitListItem from "./tuit-list-item";
import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import * as service from '../../services/tuits-service'
import {findAllTuits, deleteTuit} from "../Actions/tuits-actions";

const  TuitList = () =>{
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), []);

    return (
        <>
            <ul className="list-group">
                {
                    tuits.map(
                        tuit => {
                            return <TuitListItem tuit={tuit} deleteTuit={deleteTuit}/>;
                        }
                    )
                }
            </ul>
        </>
    )
};

export default TuitList;