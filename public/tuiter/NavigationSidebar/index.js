const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
             <a class="list-group-item" href="/">
                    <i class="fa fa-home"></i><span class="ms-1">Home</span></a>
             <a class="list-group-item" href="/">
                    <i class="fa fa-hashtag"></i> <span class="ms-1">Explore</span></a>
             <a class="list-group-item" href="/">
                    <i class="fa fa-bell"></i><span class="ms-1">Notifications</span></a>
             <a class="list-group-item" href="/">
                    <i class="fa fa-envelope"></i> <span class="ms-1">Messages</span></a>
             <a class="list-group-item" href="/">
                    <i class="fa fa-bookmark"></i> <span class="ms-1">Bookmarks</span></a>
             <a class="list-group-item" href="/">
                    <i class="fa fa-list-ul"></i> <span class="ms-1">Lists</span></a>
             <a class="list-group-item" href="/">
                    <i class="fa fa-user"></i> <span class="ms-1">Profile</span></a>
             <a class="list-group-item" href="/">
                    <i class="fa fa-bars"></i> <span class="ms-1">More</span></a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
