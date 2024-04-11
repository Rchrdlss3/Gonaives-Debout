import './App.css';
import {Routes, Route, HashRouter} from 'react-router-dom';
import { routeMap } from './helper/commonhelper';
function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        {[...routeMap.values()].map(route => 
         <Route path = {route.path} element  = {route.element}>{route.name}</Route>
        )}
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
