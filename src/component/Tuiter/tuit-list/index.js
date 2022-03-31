import TuitListItem from "./tuit-list-item";
import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import * as service from '../../services/tuits-service'
import {findAllTuits} from "../Actions/tuits-actions";

const  TuitList = () =>{
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    // const findAllTuits = async () => {
    //     const tuits = await service.findAllTuits();
    //     dispatch({
    //         type: 'FIND_ALL_TUITS',
    //         tuits: tuits
    //     });
    // }
    useEffect(() => findAllTuits(dispatch), []);

    return (
        <>
            <ul className="list-group">
                {
                    tuits.map(
                        tuit => {
                            return <TuitListItem tuit={tuit}/>;
                        }
                    )
                }
            </ul>
        </>
    )
};

export default TuitList;