import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem"
import who from "./who.json"

const WhoToFollowList = () => {
    return (
            <ul class="list-group">
                <li class="list-group-item fw-bold">Who To Follow</li>
              {
                who.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                })
            }
            </ul>
); }
export default WhoToFollowList;