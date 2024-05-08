import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { linkStyle } from "../../helper/styles";

export default function HamburgerComponent({theme,setTheme,routeMap}) {
    const [flipped,setFlipped] = useState(false);
    const hamburgerWidth = flipped ? 70 : 35

    let hamburgerList = [];
    const bars = () => {
        for (let i = 0; i < 3; i++) {
            hamburgerList.push(
            <div 
            id = {`hamburger-bar${i}`}
            style = {{
                width: hamburgerWidth,
                height: '5px',
                backgroundColor: theme.tertiary,
                margin: '6px 0',
                transition: '0.4s'
            }}>
            </div>
            )
    }
    return hamburgerList;
    }
    useEffect(() => {
        const bar1 = document.getElementById(`hamburger-bar0`); const bar2 = document.getElementById(`hamburger-bar1`); const bar3 = document.getElementById(`hamburger-bar2`)
        if (flipped) {
            bar1.style.transform = "translate(0, 11px) rotate(-45deg)"
            bar2.style.opacity = '0'
            bar3.style.transform = "translate(0, -11px) rotate(45deg)"
        } else {
            bar1.style.transform = "translate(0, 0px) rotate(0deg)"
            bar2.style.opacity = '100%'
            bar3.style.transform = "translate(0, 0px) rotate(0deg)"
        }
    },[flipped])

    return (
        <div>
            <div        
            style = {{
            position: "absolute",
            right: 20,
            zIndex: 100
        }}
        onClick = {(e) => {setFlipped(!flipped)}}
        >
            {bars()}    
        </div>
            <div style = {{
                position: 'fixed',
                display : flipped ? 'flex' : 'none',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: theme.primary,
                opacity: '100%',
                height: '100%',
                width: '100%',
                bottom: 0,
                right: 0
            }}>
            {
                [...routeMap.values()].map(route => 
                    {
                        if (route.name !== 'Error') {
                            return <NavLink
                                to = {route.path}
                                className = {({isActive}) => isActive? 'link-active':'link-inactive'}
                                style = {({isActive,isPending,isTransitioning}) => linkStyle(theme,isActive,isPending,isTransitioning,true)}
                                onClick = {() => setFlipped(false)}
                                >{route.name}</NavLink>
                            }
                    }
                )
                }
            </div>
        </div>
    )
}