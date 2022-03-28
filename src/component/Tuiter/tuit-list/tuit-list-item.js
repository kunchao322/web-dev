import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats/tuit-stats";

const TuitListItem = ({
                      post =  {
                          "_id": "123",
                          "topic": "Web Development",
                          "postedBy": {
                              "username": "ReactJS"
                          },
                          "liked": true,
                          "verified": false,
                          "handle": "ReactJS",
                          "time": "2h",
                          "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                          "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                          "attachments": {
                              "video": "unKvMC3Y1kI"
                          },
                          "logo-image": "../../../images/react-blue.png",
                          "avatar-image": "../../../images/react-blue.png",
                          "stats": {
                              "comments": 123,
                              "retuits": 234,
                              "likes": 345
                          }
                      }
                  }) =>{
    const dispatch = useDispatch();
    const deleteTuit = (post) => {
        dispatch({type: 'delete-tuit', post})
    };
    const likeTuit = () => {
        dispatch({type: 'like-tuit', post});
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
    if(post.hasOwnProperty("attachments")){
        if(post.attachments.hasOwnProperty("image")){
            attachment=post.attachments.image;
        }else if(post.attachments.hasOwnProperty("video")){
            attachment=post.attachments.video;
        }
    }

return (
    <>
        <div className="list-group-item d-flex flex-wrap align-top p-2" style={style1}>
            <div className="col-1 justify-content-end pe-1">
                <a><img src={post["avatar-image"]} className="img-fluid w-100 rounded-circle"/></a>
            </div>
            <div className="col-11">
                <ul className="list-group">
                    <li className="list-group-item bg-transparent border-0">
                        <div className="d-flex align-items-center  justify-content-between">
                            <div className=" fw-bold ">{post.postedBy.username}<i className="fa fa-check-circle ps-1"></i><span
                                className="text-secondary ps-1">- {post.time}</span>
                            </div>
                                <i onClick={() =>
                                    deleteTuit(post)}
                                   className=" fa fa-trash right-float

                  "></i>
                        </div>
                        <div className="text-white">
                            {post.tuit}
                        </div>
                    </li>

                    <li className="list-group-item bg-transparent border-0">
                        <div className="card border-1 bg-transparent" style={style2}>
                            <img className="card-img-top" style={style3}
                                 src={attachment} alt="Card image cap"/> TODO
                                <div className="card-body ms-3 mb-3 me-3">
                                    <h5 className="card-title ">{post.title}</h5>
                                    <p className="card-text">{post.tuit}</p>
                                </div>
                        </div>
                    </li>

                    <li className="list-group-item d-inline-flex justify-content-evenly align-items-center bg-transparent border-0">
                        <div className=" d-flex wd-icons align-items-center" href="#">
                            <i className="fa fa-comment"></i>
                            <div className="ps-1">{post.stats.comments}</div>
                        </div>

                        <div className="d-flex wd-icons align-items-center" href="#">
                            <i className="fa fa-reply-all"></i>
                            <div className="ps-1">{post.stats.retuits}</div>
                        </div>

                        <div>
                            <span onClick={likeTuit}>
                                {
                                    post.liked &&
                                    <i className="fa fa-heart me-1"
                                       style={highlightedIcon}></i>
                                }
                                {
                                    !post.liked &&
                                    <i className="fa fa-heart me-1"></i>
                                }
                                {post.stats && post.stats.likes}
                             </span>
                        </div>

                        <div className="d-flex wd-icons align-items-center" href="#">
                            <i className="fa fa-share"></i>
                            <div className="ps-1"></div>

                        </div>
                    </li>



                </ul>
            </div>
            {/*<div>*/}
            {/*    <i onClick={() =>*/}
            {/*        deleteTuit(post)}*/}
            {/*       className="fa fa-trash*/}
            {/*      "></i>*/}
            {/*    </div>*/}
        </div>


    </>
)
}
export default TuitListItem;