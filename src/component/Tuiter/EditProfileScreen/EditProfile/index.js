import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import React, {useState} from "react";

const  Profile = () =>{

    const dispatch = useDispatch();
    const updateProfileClickHandler = (profile) =>{
        const action = {
            type: 'update-profile',
            profile
        };
        dispatch(action);
    }

    const profile = useSelector(state => state.profile);
    // const [profile, setProfile] = useState({profile: useSelector(state => state.profile), done: false});

    return (
        <>
            <div className="row">
                <form>
                    <div className="align-items-center d-flex justify-content-between p-2">
                        <div className="col-10">
                            <i className="fa fa-trash "></i>
                            <span className="m-3 ">Edit Profile</span>
                        </div>
                        <button className="rounded-pill" onClick={() =>{updateProfileClickHandler(profile)}}>Save</button>
                    </div>

                    <div className="pos-relative">
                        <img height="200px" src={profile.bannerPicture} className="w-100"/>
                        <div className="list-group-item align-items-center d-flex justify-content-between p-2 bg-transparent border-0 ">
                            <div className="col-2"><img src={profile.profilePicture} className="w-100 rounded-circle"/></div>
                            <div className="col-7 m-1">
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control bg-black text-dark border-1 border-dark" id="fname"
                                placeholder={profile.firstName}
                               onChange={(event) =>
                                   updateProfileClickHandler(
                                       {...profile,
                                           firstName: event.target.value})}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control bg-black text-dark border-1 border-dark" id="lname"
                               placeholder={profile.lastName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <input type="text" className="form-control bg-black text-dark border-1 border-dark" id="bio"
                               placeholder={profile.bio}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" className="form-control bg-black text-dark border-1 border-dark" id="location"
                               placeholder={profile.location}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input type="text" className="form-control bg-black text-dark border-1 border-dark" id="website"
                               placeholder={profile.website}/>
                    </div>
                </form>

            </div>

        </>

    );
}

export default Profile;