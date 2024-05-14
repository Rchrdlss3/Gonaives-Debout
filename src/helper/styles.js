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

class Theme {
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
// class Theme {
//     constructor(primary,secondary,font,secondFont,shadow) {
//         this.primary = primary
//         this.secondary = secondary
//         this.font = font
//         this.secondFont = secondFont
//         this.shadow = shadow
//     }
// }

// export const lightTheme = new Theme(
//     "#ffffff",
//     "f7f8f9",
//     "1f3255",
//     "435370",
//     "rgba(0,0,0,0.3)"
// )

// export const darkTheme = new Theme(
//     "15191d",
//     "1d2125",
//     "c7d1dc",
//     "8494a7",
//     "rgba(255,255,255,0.3)"
// )
export const lightTheme = new Theme (
    "#eeeeee",
    "#979797",
    "#666666",
    new Fonts("#111111","#575757"),
    new Links("#0088cc","#111111","#111111"),
    "rgba(0,0,0,0.3)"

) 

export const darkTheme = new Theme(
    "#15191d",
    "#1d2125",
    "#c7d1dc",
    new Fonts("#c7d1dc","#fffffff"),
    new Links("#0088cc","#eeeeee","#eeeeee"),
    "rgba(0,0,0,0.3)"
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

export const linkStyle = (themeObj,isActive,isPending,isTransitioning,isMobile) => {
    return {
        margin: '5px',
        textDecoration: 'none',
        fontWeight: '420',
        fontSize: isMobile ? '5em':'1em',
        color: isActive ? `${themeObj.links.active}`:'inherit',
        justifyContent: 'center',
    }   
}

export const mainStyle = (themeObj,isMobile) => {
    return {
        width: '100%',
        height : '100%',
        backgroundColor : themeObj.primary,
        color : themeObj.fonts.defaultColor,
        transition: '.4s',
        display: isMobile ? 'flex' : null,
        flexDirection: isMobile ? 'column' : null,
        alignItems: isMobile ? 'center' : null,
        justifyContent: isMobile ? 'center' : null
    }
}

export const navigationStyle = (themeObj,isMobile) => {
    return {
            height:'50px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? null : 'center',
            fontSize: isMobile ? '1.5em' : null
    }
}
export const titleStyle = (themeObj,fontSize) => {
    return {
        margin: '0',
        padding: '0',
        fontSize: fontSize
    }
}
export const underTitleStyle = (themeObj,fontSize) => {
    return {
        fontFamily: 'Dancing Script',
        marginTop: '0',
        padding: '0',
        fontSize: fontSize
    }
}

export const visionCardStyle = (themeObj,isMobile) => {
    return {
            width: isMobile ? '90%' : '350px',
            height: isMobile ? '500px' : '200px',
            border: `1px solid ${themeObj.secondary}`,
            fontSize: isMobile ? '2.5em' : null,
            borderRadius: `5px`,
            boxShadow: `5px 5px 5px ${themeObj.transparent}`,
            color: themeObj.fonts.defaultColor,
            margin: isMobile ? 'auto' : null,
    }
}

export const dropDownStyle = (themeObj,isMobile) => {
    return {
        border: 'none',
        backgroundColor: 'inherit',
        color: 'inherit',
        margin: '5px',
        textDecoration: 'none',
        fontWeight: '420',
        fontSize: isMobile ? '5em':'1em',
        justifyContent: 'center'
    }
}