import TuitListItem from "./tuit-list-item";
import tuits from "./tuits.json"

const  TuitList = () =>{
    return (
        <>
            <ul className="list-group">
                {
                    tuits.map(
                        tuit => {
                            return <TuitListItem post={tuit}/>;
                        }
                    )
                }
            </ul>
        </>

    );
}

export default TuitList;