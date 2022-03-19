import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./component/HelloWorld";
import Labs from './component/Labs';
import Tuiter from "./component/Tuiter";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from "./component/Tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./component/Tuiter/ExploreScreen/ExploreScreen";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/hello" element = {<HelloWorld/>}/>
                <Route path="/" element = {<Labs/>}/>
                <Route path="/tuiter"  element = {<Tuiter/>}/>
                <Route path="/tuiter/home"  element = {<HomeScreen/>}/>
                <Route path="/tuiter/explore" element = {<ExploreScreen/>}/>

            </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;
