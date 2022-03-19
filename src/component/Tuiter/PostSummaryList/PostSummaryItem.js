const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "./images/react.png"
        }
    }) => {
      return (
        <>
            <div className="list-group-item d-flex justify-content-between ">
                <div className="col-10">
                    <div className="text-secondary">{post.topic}</div>
                    <div className="text-white  fw-bold">{post.userName}<i className="fa fa-check-circle m-1"></i><span
                        className="text-secondary">-{post.time}</span>
                    </div>
                    <div className="text-white fw-bold">{post.title}
                    </div>
                </div>
                <div className="col-2">
                    <img className="img-fluid float-right " src={post.image} alt={post.topic}/>
                </div>
            </div>

        </>

    )
}

export default PostSummaryItem;