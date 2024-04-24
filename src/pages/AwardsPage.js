import React from 'react'
import NavigationComponent from '../components/CommonComponents/NavigationComponent';

export default function AwardsPage({theme,setTheme}) {
  return (
    <div>
      <NavigationComponent theme = {theme} setTheme = {setTheme}/>
      <h1 style = {{
        fontSize: '5em'
      }}>Page for Awards</h1>
    </div>
  )
}