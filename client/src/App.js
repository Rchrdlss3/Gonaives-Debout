import './App.css';
import { useState, createContext } from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MarketingPage from './pages/MarketingPage';
import AccomplishmentsPage from './pages/AccomplishmentsPage';
import AwardsPage from './pages/AwardsPage';
import ProjectsPage from './pages/ProjectsPage';
import FundRaisingPage from './pages/FundRaisingPage';
import ErrorPage from './pages/ErrorPage';
import HistoryPage from './pages/HistoryPage';
import { mainStyle } from './helper/styles';
import { getCurrentTheme } from './helper/commonhelper';
import { UAParser } from 'ua-parser-js';
import NavigationComponent from './components/CommonComponents/NavigationComponent';

export const ThemeContext = createContext()

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
        <ThemeContext.Provider value = {[theme,setTheme]}>
      <NavigationComponent isMobile = {isMobile}/>
      <Routes>
        <Route element = {<HomePage isMobile = {isMobile} />} path = "/"></Route>
        <Route element = {<MarketingPage />} path = "/marketing"></Route>
        <Route element= {<HistoryPage />} path = "/history"></Route>
        <Route element = {<AccomplishmentsPage />} path = "/accomplishments"></Route>
        <Route element = {<AwardsPage />} path = "/awards"></Route>
        <Route element = {<ProjectsPage />} path = "/projects"></Route>
        <Route element = {<FundRaisingPage />} path = "/fund-raising"></Route>
        <Route element = {<ErrorPage />} path = "/*"></Route>
      </Routes>
      </ThemeContext.Provider>
      </HashRouter>
    </div>
  );
}
