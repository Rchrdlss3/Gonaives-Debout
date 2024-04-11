import React from 'react';
import { routeMap } from '../helper/commonhelper';
import {NavLink} from 'react-router-dom';
import {haitianFlagColors} from '../helper/commonhelper';

function NavigationComponent() {
  return (
    <div style = {{
        height: '50px',
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.7)',
        width: '100%'
    }}>
        <img style = {{
            display: 'flex',
            left: '0',
            width: '50px',
            height: '50px',
            backgroundColor: 'black',
            position: 'absolute'
        }}
        alt = 'Logo Would Be Here'
        src = ''
        ></img>
    <div style = {{
        marginTop: '10px'
    }}>
    {[...routeMap.values()].map(route => 
    {
    if (route.name !== 'Error') {
        return <NavLink
         to = {route.path}
         className = {({isActive}) => isActive? 'link-active':'link-inactive'}
         style = {({isActive,isPending,isTransitioning}) => {
          return {
              margin: '5px',
              textDecoration: 'none',
              fontWeight: '400',
              color: isActive ? `${haitianFlagColors.red}`:'inherit'
          }   
         }}
         >{route.name}</NavLink>
    }
}
    )}
    </div>
    </div>
  )
}

export default NavigationComponent