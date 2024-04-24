import React from 'react'
import { titleStyle } from '../../helper/styles'

export default function WhoAreWeComponent({theme}) {
  return (
    <div>
        <h2 style = {titleStyle(theme,'2em')}>Who We Are</h2>
        <div style = {{              
          display: 'flex',
          justifyContent: 'center',
            alignItems: 'center',}}>
            <p style = {{
              textAlign: 'center',
              width: '80%'
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  )
}