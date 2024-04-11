import AccomplishmentsPage from '../pages/AccomplishmentsPage';
import HistoryPage from '../pages/HistoryPage';
import AwardsPage from '../pages/AwardsPage';
import HomePage from '../pages/HomePage';
import MarketingPage from '../pages/MarketingPage';
import ProjectsPage from '../pages/ProjectsPage'
import FundRaisingPage from '../pages/FundRaisingPage';
import ErrorPage from '../pages/ErrorPage';

export const haitianFlagColors = {
    'red' : '#d21034',
    'blue' : '#00209f',
    'white': '#ffffff',
    'yellow': '#f1b517',
    'green': '#016a16'
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