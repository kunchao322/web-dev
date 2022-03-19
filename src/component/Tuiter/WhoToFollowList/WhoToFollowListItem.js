const WhoToFollowListItem = (    {
    who = {
        avatarIcon: '../Tuiter/images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
    }
}
)=>{
    return (

            <li className="list-group-item align-items-center d-flex justify-content-between p-2">
                <div className="col-2"><img src={who.avatarIcon} className="img-fluid w-100 rounded-circle"/></div>
                <div className="col-7 m-1">
                    <div className="fw-bold text-white">{who.userName} <i className="fa fa-check-circle"></i></div>
                    <div
                        className="text-secondary">@{who.handle}</div>
                </div>
                <div className="col-3 btn btn-primary  rounded-pill p-2">Follow</div>
             </li>

    );
}
export default WhoToFollowListItem;