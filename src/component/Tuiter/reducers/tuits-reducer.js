// import tuits from '../data/tuits.json';
import {FIND_ALL_TUITS} from "../Actions/tuits-actions";

const tuitsReducer = (state = [],action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        default:
            return state;
    }
};

export default tuitsReducer;
