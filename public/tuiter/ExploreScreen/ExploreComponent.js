import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                                           <div>
                        <div class="d-flex align-items-center position-relative">
                            <i class="fa fa-search ps-4 position-absolute text-secondary"></i>
                            <input class="form-control ps-5 pe-auto rounded-pill bg-dark text-secondary border-0" type="search" value="Search Tuiter
">
                            <i class="fa fa-cog fa-lg ps-2"></i>
                        </div>
                    </div>
                    
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                        <li class="nav-item border-bottom-2 ">
                            <a class="nav-link bg-black text-secondary border-bottom override-bs" href="for-you.html">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link d-none d-md-block text-secondary" href="entertainment.html">Entertainment</a>
                        </li>
           </ul>
           <!-- image with overlaid text -->
           <li class="list-group-item bg-transparent border-0 mb-2 p-0 ">
                <img src="../images/spaceX.jpeg" width=100%>
                <div class="wd-bottom-left">SpaceX's Starship</div>
           </li>
           
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
