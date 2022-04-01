import {useDispatch} from "react-redux";

const TuitListItem = ({tuit, deleteTuit, updateTuit}) =>{
    const dispatch = useDispatch();
    // const deleteTuit = (tuit) => {
    //     dispatch({type: 'delete-tuit', tuit})
    // };

    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };


    const style1 = {
        border: "solid 0.5px gray"
    }

    const style2 = {
        borderradius: "5%",
        border: "gray 0.5em solid"
    }

    const style3 = {
        borderTopLeftRadius: "5%",
        borderTopRightRadius: "5%"
    }

    const highlightedIcon = {
        color: "palevioletred"
    }

    let attachment = '';
    if(tuit.hasOwnProperty("attachments")){
        if(tuit.attachments.hasOwnProperty("image")){
            attachment=tuit.attachments.image;
        }else if(tuit.attachments.hasOwnProperty("video")){
            attachment=tuit.attachments.video;
        }
    }
return (
    <>
        {/*<div className="list-group-item d-flex flex-wrap align-top p-2" style={style1}>*/}
        {/*    <div className="col-1 justify-content-end pe-1">*/}
        {/*        <a><img src={tuit["avatar-image"]} className="img-fluid w-100 rounded-circle"/></a>*/}
        {/*    </div>*/}
        {/*    <div className="col-11">*/}
        {/*        <ul className="list-group">*/}
        {/*            <li className="list-group-item bg-transparent border-0">*/}
        {/*                <div className="d-flex align-items-center  justify-content-between">*/}
        {/*                    <div className=" fw-bold ">{tuit.postedBy.username}<i className="fa fa-check-circle ps-1"></i><span*/}
        {/*                        className="text-secondary ps-1">- {tuit.time}</span>*/}
        {/*                    </div>*/}
        {/*                        <i onClick={() =>*/}
        {/*                            deleteTuit(tuit)}*/}
        {/*                           className=" fa fa-trash right-float*/}

        {/*          "></i>*/}
        {/*                </div>*/}
        {/*                <div className="text-white">*/}
        {/*                    {tuit.tuit}*/}
        {/*                </div>*/}
        {/*            </li>*/}

        {/*            <li className="list-group-item bg-transparent border-0">*/}
        {/*                <div className="card border-1 bg-transparent" style={style2}>*/}
        {/*                    <img className="card-img-top" style={style3}*/}
        {/*                         src={attachment} alt="Card image cap"/> TODO*/}
        {/*                        <div className="card-body ms-3 mb-3 me-3">*/}
        {/*                            <h5 className="card-title ">{tuit.title}</h5>*/}
        {/*                            <p className="card-text">{tuit.tuit}</p>*/}
        {/*                        </div>*/}
        {/*                </div>*/}
        {/*            </li>*/}

        {/*            <li className="list-group-item d-inline-flex justify-content-evenly align-items-center bg-transparent border-0">*/}
        {/*                <div className=" d-flex wd-icons align-items-center" href="#">*/}
        {/*                    <i className="fa fa-comment"></i>*/}
        {/*                    <div className="ps-1">{tuit.stats.comments}</div>*/}
        {/*                </div>*/}

        {/*                <div className="d-flex wd-icons align-items-center" href="#">*/}
        {/*                    <i className="fa fa-reply-all"></i>*/}
        {/*                    <div className="ps-1">{tuit.stats.retuits}</div>*/}
        {/*                </div>*/}

        {/*                <div>*/}
        {/*                    <span onClick={likeTuit}>*/}
        {/*                        {*/}
        {/*                            tuit.liked &&*/}
        {/*                            <i className="fa fa-heart me-1"*/}
        {/*                               style={highlightedIcon}></i>*/}
        {/*                        }*/}
        {/*                        {*/}
        {/*                            !tuit.liked &&*/}
        {/*                            <i className="fa fa-heart me-1"></i>*/}
        {/*                        }*/}
        {/*                        {tuit.stats && tuit.stats.likes}*/}
        {/*                     </span>*/}
        {/*                </div>*/}

        {/*                <div className="d-flex wd-icons align-items-center" href="#">*/}
        {/*                    <i className="fa fa-share"></i>*/}
        {/*                    <div className="ps-1"></div>*/}

        {/*                </div>*/}
        {/*            </li>*/}



        {/*        </ul>*/}
        {/*    </div>*/}
        {/*    /!*<div>*!/*/}
        {/*    /!*    <i onClick={() =>*!/*/}
        {/*    /!*        deleteTuit(post)}*!/*/}
        {/*    /!*       className="fa fa-trash*!/*/}
        {/*    /!*      "></i>*!/*/}
        {/*    /!*    </div>*!/*/}
        {/*</div>*/}

        <div className='list-group'>
            <div className='list-group-item'>
                <div>
                    <div>{tuit._id}</div>
                    {/*<div>{tuit.postedBy.username}</div>*/}
                    <div>{tuit.tuit}</div>
                    <div>
                        <i onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            likes: tuit.likes + 1
                        })} className="far fa-thumbs-up ms-2"></i>
                        Likes: {tuit.likes}
                    </div>
                    <div>
                        <i onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            dislikes: tuit.dislikes + 1
                        })} className="far fa-thumbs-down ms-2"></i>
                        Dislikes: {tuit.dislikes}
                    </div>

                </div>

                <i className="fa fa-trash float-end"
                   onClick={() => deleteTuit(
                       dispatch, tuit)}></i>

            </div>
        </div>
    </>
)
}
export default TuitListItem;