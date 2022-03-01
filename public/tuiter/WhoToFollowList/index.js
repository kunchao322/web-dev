import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js"
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            <li class="list-group-item">Who To Follow</li>
              ${
                who.map(w => {
                    return(WhoToFollowListItem(w));
                }).join('')
            }
               
   
            </ul>
`); }

export default WhoToFollowList;
