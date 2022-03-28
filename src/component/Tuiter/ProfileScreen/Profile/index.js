import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const  Profile = () =>{
    const who = useSelector(state => state.profile);
    return (
        <>
            <div className="row">
                <div className="align-items-center d-flex  p-2">
                    <div className="m-1">
                       <i className="fa fa-arrow-circle-left fa-2x"></i>
                    </div>
                    <div className="m-1">                        <div className="text-white fs-5 fw-bold">
                            {who.firstName} {who.lastName}
                        </div>
                        <div>
                            <span>5,123 Tweets</span>
                        </div>
                    </div>
                </div>

                <div className="pos-relative">
                    <img height="200px" src={who.bannerPicture} className="w-100"/>
                    <div className="list-group-item align-items-center d-flex justify-content-between p-2 bg-transparent border-0 ">
                        <div className="col-2"><img src={who.profilePicture} className="w-100 rounded-circle"/></div>
                        <div className="col-7 m-1">
                        </div>
                        <Link to="/tuiter/editprofile"  className="col-3 btn rounded-pill border-1 border-dark p2">Edit Profile</Link>
                    </div>
                </div>
                <div className="p-1 m-1">
                    <div className="text-white fs-5 fw-bold">
                        {who.firstName} {who.lastName}
                    </div>
                    <div className="text-dark">@{who.handle}</div>
                </div>
                <div  className="p-1 m-1">{who.bio}</div>
                <div  className="p-1 m-1 d-flex">
                    <span className="col-4"><i className="fa fa-location-arrow "></i> {who.location}</span>
                    <span className="col-4"><i className="fa fa-baby"></i> {who.dateOfBirth}</span>
                    <span className="col-4"><i className="fa fa-calendar"></i> {who.dateJoined}</span>
                </div>
                <div className="p-1 m-1 d-flex">
                    <div className="text-white fw-bold col-3">{who.followingCount}<span className='m-2 text-dark'>Following</span></div>
                    <div className="text-white fw-bold col-3">{who.followersCount}<span className='m-2 text-dark'>Followers</span></div>

                </div>
            </div>

        </>

    );
}

export default Profile;