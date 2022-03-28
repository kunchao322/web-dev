const TuitListItem = ({
                      post = {
                          userName: "Loraine Suche",
                          time: "17",
                          content: "quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae",
                          title: "Woodland Rush",
                          details: "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
                          commentQty: "57",
                          shareQty: "82",
                          likeQty: "18",
                          avatarIcon: "./images/pug.jpg",
                          image: "../images/banner.jpeg"
                      }
                  }) =>{
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

return (
    <>
        <div className="list-group-item d-flex flex-wrap align-top p-2" style={style1}>
            <div className="col-1 justify-content-end pe-1">
                <a><img src={post.avatarIcon} className="img-fluid w-100 rounded-circle"/></a>
            </div>
            <div className="col-11">
                <ul className="list-group">

                    <li className="list-group-item bg-transparent border-0">
                        <div>
                            <div className=" fw-bold ">{post.userName}<i className="fa fa-check-circle ps-1"></i><span
                                className="text-secondary ps-1">- {post.time}</span>
                            </div>
                            <div className="text-white">
                                {post.content}
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item bg-transparent border-0">
                        <div className="card border-1 bg-transparent" style={style2}>
                            <img className="card-img-top" style={style3}
                                 src={post.image} alt="Card image cap"/>
                                <div className="card-body ms-3 mb-3 me-3">
                                    <h5 className="card-title ">{post.title}</h5>
                                    <p className="card-text">{post.details}</p>
                                </div>
                        </div>
                    </li>

                    <li className="list-group-item d-inline-flex justify-content-evenly align-items-center bg-transparent border-0">
                        <div className=" d-flex wd-icons align-items-center" href="#">
                            <i className="fa fa-comment"></i>
                            <div className="ps-1">{post.commentQty}</div>
                        </div>

                        <div className="d-flex wd-icons align-items-center" href="#">
                            <i className="fa fa-reply-all"></i>
                            <div className="ps-1">{post.shareQty}</div>
                        </div>

                        <div className="d-flex wd-icons  align-items-center" href="#" style={highlightedIcon}>
                            <i className="fa fa-heart"></i>
                            <div className="ps-1">{post.likeQty}</div>
                        </div>

                        <div className="d-flex wd-icons align-items-center" href="#">
                            <i className="fa fa-share"></i>
                            <div className="ps-1"></div>

                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </>
)
}
export default TuitListItem;