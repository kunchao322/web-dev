// import tuits from '../data/tuits.json';
import {FIND_ALL_TUITS, DELETE_TUIT, CREATE_TUIT, UPDATE_TUIT} from "../Actions/tuits-actions";

const tuitsReducer = (state = [],action) => {
    switch (action.type) {
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            console.log(action.newTuit);
            return [
                ...state,
                action.newTuit
            ];

        default:
            return state;
    }
};

export default tuitsReducer;
