import WhoToFollowListItem from "./WhoToFollowListItem"
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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