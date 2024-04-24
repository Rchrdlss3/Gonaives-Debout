import AccomplishmentsPage from '../pages/AccomplishmentsPage';
import HistoryPage from '../pages/HistoryPage';
import AwardsPage from '../pages/AwardsPage';
import HomePage from '../pages/HomePage';
import MarketingPage from '../pages/MarketingPage';
import ProjectsPage from '../pages/ProjectsPage'
import FundRaisingPage from '../pages/FundRaisingPage';
import ErrorPage from '../pages/ErrorPage';
import {darkTheme, lightTheme} from './styles';

export const TITLE = 'Gonayiv Debou';

export const HAITIAN_MOTTO = `L'UNION FAIT LA FORCE`;

export const SLOGAN = 'Sécurité Solidarité Hospitablé'
export const THEME_CONSTANTS = {
    lightTheme : "LIGHT_THEME",
    darkTheme: "DARK_THEME"
}
export const getCurrentTheme = () => {
    let theme = localStorage.getItem("THEME")
    switch(theme) {
        case THEME_CONSTANTS.lightTheme : 
        return lightTheme;
        case THEME_CONSTANTS.darkTheme :
        return darkTheme;
        case null:
        localStorage.setItem("THEME",THEME_CONSTANTS.lightTheme)
        return lightTheme;
    }
}

export const setCurrentTheme = (checked) => {
    if (checked == true) {
        localStorage.setItem("THEME",THEME_CONSTANTS.darkTheme)
        return darkTheme
    } else {
        localStorage.setItem("THEME",THEME_CONSTANTS.lightTheme)
        return lightTheme
    }
}
export const routeMap = new Map([
        ["home",{
            path: "/",
            name: "Home",
            element: <HomePage />
        }],
        ["marketing",{
            path: "/marketing",
            name: "Marketing",
            element: <MarketingPage />
        }],
        ["history",{
            path: "/history",
            name: "History",
            element: <HistoryPage />
        }],
        ["accomplishments",{
            path: "/accomplishments",
            name: "Accomplishments",
            element: <AccomplishmentsPage />
        }],
        ["awards",{
            path: "/awards",
            name: "Awards",
            element: <AwardsPage />
        }],
        ["projects", {
            path: "/projects",
            name: "Projects",
            element: <ProjectsPage />
        }],
        ["fundRaising", {
            path: "/fund-raising",
            name: "Fund Raising",
            element: <FundRaisingPage />
        }],
        ["error", {
            path: "/*",
            name: "Error",
            element: <ErrorPage />
        }]
]);