import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
  const cardText = {
   position:"absolute",
      top:"22",
      right:"0",
      bottom:"0",
      left:"0",
      padding:"1rem",
  }

    return (
        <>
            <div className="row">
                <div>
                    <div className="d-flex align-items-center position-relative">
                        <i className="fa fa-search ps-4 position-absolute text-secondary"/>
                        <input className="form-control ps-5 pe-auto rounded-pill bg-dark text-secondary border-0"
                               type="search" value="Search Tuiter"/>
                        <i className="fa fa-cog fa-lg ps-2"/>
                    </div>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item border-bottom-2 ">
                    <a className="nav-link bg-black text-secondary border-bottom override-bs" href="for-you.html">For
                        you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="sports.html">Sports</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link d-none d-md-block text-secondary" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div className="card" >
                <img src="./images/spaceX.jpeg" className="w-100 card-img"/>
                <div  style ={cardText}>
                    <div className="fw-bold text-white fs-3  position-absolute-bottom-left">
                        SpaceX's Starship</div>
                </div>

            </div>

            <PostSummaryList/>
        </>

    );
}
export default ExploreComponent;
