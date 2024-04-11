import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { routeMap } from './helper/commonhelper';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {[...routeMap.values()].map(route => 
         <Route path = {route.path} element  = {route.element}>{route.name}</Route>
        )}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
