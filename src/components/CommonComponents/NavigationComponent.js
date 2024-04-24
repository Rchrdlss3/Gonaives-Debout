import React from 'react';
import { routeMap } from '../../helper/commonhelper';
import {NavLink} from 'react-router-dom';
import {HAITIAN_FLAG_COLORS} from '../../helper/commonhelper';
import { linkStyle, navigationStyle } from '../../helper/styles';
import ThemeSwitch from './ThemeSwitch';
import { useNavigate } from 'react-router';

function NavigationComponent({theme,setTheme}) {
    const navigate = useNavigate();
  return (
    <div style = {navigationStyle(theme)}>
        <img style = {{
            display: 'flex',
            left: '0',
            width: '40px',
            height: '40px',
            border: `2px solid ${theme.secondary}`,
            borderRadius: '50%',

        }}
        alt = 'Jean-Jacques Dessalines'
        src = {theme.logo.logo}
        onClick = {() => navigate("/")}
        ></img>
    {[...routeMap.values()].map(route => 
    {
    if (route.name !== 'Error') {
        return <NavLink
         to = {route.path}
         className = {({isActive}) => isActive? 'link-active':'link-inactive'}
         style = {({isActive,isPending,isTransitioning}) => linkStyle(theme,isActive,isPending,isTransitioning)}
         >{route.name}</NavLink>
    }
}
    )}
    <ThemeSwitch theme = {theme} setTheme = {setTheme}/>
    </div>
  )
}

export default NavigationComponent