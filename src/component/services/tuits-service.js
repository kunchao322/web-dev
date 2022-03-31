import axios from "axios";

const TUITS_API = "http://localhost:4000/api/tuits";

export const createTuits = async (tuit)=>{};
export const findAllTuits = async ()=>{
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    console.log(tuits);
    return tuits;
};
export const deleteTuit  = async (tuit)=>{
    const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
};
export const updateTuit  = async (tuit)=>{}
