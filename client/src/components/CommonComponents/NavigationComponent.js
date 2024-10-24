import React, { useContext } from 'react';
import { routeMap } from '../../helper/commonhelper';
import {NavLink} from 'react-router-dom';
import { dropDownStyle, linkStyle, navigationStyle } from '../../helper/styles';
import ThemeSwitch from './ThemeSwitch';
import { useNavigate } from 'react-router';
import HamburgerComponent from './HamburgerComponent';
import { ThemeContext } from '../../App';

function NavigationComponent({isMobile}) {
    const navigate = useNavigate();

    const [theme,setTheme] = useContext(ThemeContext);

    const navigationLinks = () => {
      return (
        [...routeMap.values()].map(route => 
          {
          if (route.name !== 'Error' && route.dropdown == null) {
              return <NavLink
               to = {route.path}
               className = {({isActive}) => isActive? 'link-active':'link-inactive'}
               style = {({isActive,isPending,isTransitioning}) => linkStyle(theme,isActive,isPending,isTransitioning)}
               >{route.name}
               </NavLink>               
          } else if (route.dropdown != null) {
            return <select style = {dropDownStyle(theme,isMobile)} onChange = {(e) => navigate(e.target.value)}>
            {
            route.dropdown.map(option => {
              return <option value = {option.path}>{option.name}</option>
            })
            }
            </select>
          }
        }
          )
      )
    }
  return (
    <div style = {navigationStyle(theme,isMobile)}>
        {isMobile ? null : <img style = {{
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
        ></img> }
        {isMobile ?  <HamburgerComponent theme = {theme} setTheme = {setTheme} routeMap = {routeMap}/> : navigationLinks()}
   
    <ThemeSwitch theme = {theme} setTheme = {setTheme} isMobile = {isMobile}/>
    </div>
  )
}

export default NavigationComponent