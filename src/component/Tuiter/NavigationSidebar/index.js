import React from "react";
import {Link} from "react-router-dom";


const NavigationSidebar = ({active}) => {
    return (
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></Link>

                <Link to="/tuiter/home" className={`list-group-item ${active === 'Home' ? 'active' : ''}  align-items-center d-flex `} >
                    <i className="fa fa-home "/> <span className="ms-1  d-none d-lg-block ">Home</span></Link>

                <Link to="/tuiter/explore" className={`list-group-item ${active === 'Explore' ? 'active' : ''} align-items-center d-flex`} >
                    <i className="fa fa-hashtag"></i> <span className="ms-1  d-none d-lg-block ">Explore</span></Link>

                <a className={`list-group-item ${active === 'Notifications' ? 'active' : ''} align-items-center d-flex`} >
                    <i className="fa fa-bell"></i><span className="ms-1  d-none d-lg-block ">Notifications</span></a>

                <a className={`list-group-item ${active === 'Messages' ? 'active' : ''} align-items-center d-flex`} >
                    <i className="fa fa-envelope"></i><span className="ms-1  d-none d-lg-block ">Messages</span></a>

                <a className={`list-group-item ${active === 'Bookmarks' ? 'active' : ''} align-items-center d-flex`} >
                    <i className="fa fa-bookmark"></i> <span className="ms-1  d-none d-lg-block ">Bookmarks</span></a>

                <a className={`list-group-item ${active === 'Lists' ? 'active' : ''} align-items-center d-flex`} >
                    <i className="fa fa-list-ul"></i> <span className="ms-1  d-none d-lg-block ">Lists</span></a>

                <Link to={"/tuiter/profile"} className={`list-group-item ${active === 'Profile' ? 'active' : ''} align-items-center d-flex`} >
                    <i className="fa fa-user"></i> <span className="ms-1  d-none d-lg-block ">Profile</span></Link>

                <a className={`list-group-item ${active === 'Profile' ? 'active' : ''} align-items-center d-flex`} >
                    <i className="fa fa-bars"></i> <span className="ms-1 d-none d-lg-block ">More</span></a>
            </div>

            <div className="d-grid mt-2">
                <a href="../tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>

    </>
    );
}
export default NavigationSidebar;
