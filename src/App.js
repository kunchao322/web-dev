import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./component/HelloWorld";
import Labs from './component/Labs';
import Tuiter from "./component/Tuiter";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/hello" exact= {true} element = {<HelloWorld/>}/>
                <Route path="/" exact= {true} element = {<Labs/>}/>
                <Route path="/tuiter" exact= {true}  element = {<Tuiter/>}/>
            </Routes>

        </div>
      </BrowserRouter>

  );
}
export default App;
