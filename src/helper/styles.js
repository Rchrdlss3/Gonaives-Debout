export const HAITIAN_FLAG_COLORS = {
    'red' : '#d21034',
    'blue' : '#00209f',
    'white': '#ffffff',
    'yellow': '#f1b517',
    'green': '#016a16'
}   
class Fonts {
constructor (defaultColor,important) {
    this.defaultColor = defaultColor;
    this.important = important;
}
}
class Links {
    constructor(active,nonActive,defaultColor) {
        this.active = active ;
        this.nonActive = nonActive;
        this.defaultColor = defaultColor;
    }
}
export class Theme {
    constructor(primary,secondary,tertiary,fonts,links,transparent) {
        this.primary = primary;
        this.secondary = secondary;
        this.tertiary = tertiary;
        this.fonts = fonts;
        this.links = links;
        this.transparent = transparent
        this.logo = {
            logo: 'https://rchrdlss3.github.io/gonayiv_debout_images/logo.png',
            light : 'https://rchrdlss3.github.io/gonayiv_debout_images/lightLogo.png',
            dark : ''
        }
    }
}

export const lightTheme = new Theme (
    "#eeeeee",
    "#979797",
    "#666666",
    new Fonts("#111111","#575757"),
    new Links("#0088cc","#111111","#111111"),
    "rgba(0,0,0,0.3)"

) 

export const darkTheme = new Theme(
    "#111111",
    "#1c1b1e",
    "#818181",
    new Fonts("#eeeeee","#fffffff"),
    new Links("#0088cc","#eeeeee","#eeeeee"),
    "rgba(238,238,238,0.3)"
)

export const buttonStyle = (themeObj) => {
    return {
        padding: '5px',
        color: themeObj.links.defaultColor,
        backgroundColor: themeObj.primary,
        border: `1px solid ${themeObj.secondary}`,
        borderRadius: '5px'
    }
}

export const defaultStyle = (themeObj) => {

}

export const linkStyle = (themeObj,isActive,isPending,isTransitioning) => {
    return {
        margin: '5px',
        textDecoration: 'none',
        fontWeight: '420',
        color: isActive ? `${themeObj.links.active}`:'inherit'
    }   
}

export const mainStyle = (themeObj,isMobile) => {
    return {
        width: '100%',
        height : '100%',
        backgroundColor : themeObj.primary,
        color : themeObj.fonts.defaultColor,
        transition: '.4s'
    }
}

export const navigationStyle = (themeObj) => {
    return {
            height: '50px',
            // backgroundColor: themeObj.transparent,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
    }
}
export const titleStyle = (themeObj,fontSize) => {
    return {
        margin: '0',
        padding: '0',
        fontSize: fontSize ? fontSize : null
    }
}
export const underTitleStyle = (themeObj) => {
    return {
        fontFamily: 'Dancing Script',
        marginTop: '0',
        padding: '0'
    }
}

export const visionCardStyle = (themeObj) => {
    return {
            width: '350px',
            height: '200px',
            border: `1px solid ${themeObj.secondary}`,
            borderRadius: `5px`,
            boxShadow: `5px 5px 5px ${themeObj.tertiary}`,
            color: themeObj.fonts.defaultColor,
    }
}