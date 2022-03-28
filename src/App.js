import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./component/HelloWorld";
import Labs from './component/Labs';
import Tuiter from "./component/Tuiter";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from "./component/Tuiter/HomeScreen";
import ExploreScreen from "./component/Tuiter/ExploreScreen/ExploreScreen";
import ProfileScreen from "./component/Tuiter/ProfileScreen";
import EditProfileScreen from "./component/Tuiter/EditProfileScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index
                               element={<Labs/>}/>
                        <Route path="labs"
                               element = {<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path = "home"
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element = {<ProfileScreen/>}/>
                            <Route path="editprofile"
                                   element = {<EditProfileScreen/>}/>
                        </Route>

                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
