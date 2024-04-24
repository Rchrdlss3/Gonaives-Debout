import './App.css';
import { useState,useEffect } from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MarketingPage from './pages/MarketingPage';
import AccomplishmentsPage from './pages/AccomplishmentsPage';
import AwardsPage from './pages/AwardsPage';
import ProjectsPage from './pages/ProjectsPage';
import FundRaisingPage from './pages/FundRaisingPage';
import ErrorPage from './pages/ErrorPage';
import HistoryPage from './pages/HistoryPage';
import { lightTheme, mainStyle, Theme } from './helper/styles';
import { getCurrentTheme } from './helper/commonhelper';
import { UAParser } from 'ua-parser-js';

export default function App() {
  let parser = new UAParser(window.navigator.userAgent)
  let device = parser.getDevice()
  const [theme,setTheme] = useState(getCurrentTheme);
  const [isMobile,setIsMobile] = useState(device.type == 'mobile');
  return (
    <div className="App" style = {
      mainStyle(theme,isMobile)
    }>
      <HashRouter>
      <Routes>
        <Route element = {<HomePage theme = {theme} setTheme = {setTheme}/>} path = "/"></Route>
        <Route element = {<MarketingPage theme = {theme} setTheme = {setTheme}/>} path = "/marketing"></Route>
        <Route element= {<HistoryPage theme = {theme} setTheme = {setTheme}/>} path = "/history"></Route>
        <Route element = {<AccomplishmentsPage theme = {theme} setTheme = {setTheme}/>} path = "/accomplishments"></Route>
        <Route element = {<AwardsPage theme = {theme} setTheme = {setTheme}/>} path = "/awards"></Route>
        <Route element = {<ProjectsPage theme = {theme} setTheme = {setTheme}/>} path = "/projects"></Route>
        <Route element = {<FundRaisingPage theme = {theme} setTheme = {setTheme}/>} path = "/fund-raising"></Route>
        <Route element = {<ErrorPage theme = {theme} setTheme = {setTheme}/>} path = "/*"></Route>
        {/* {[...routeMap.values()].map(route => 
         <Route path = {route.path} element  = {route.element}>{route.name}</Route>
        )} */}
      </Routes>
      </HashRouter>
    </div>
  );
}
