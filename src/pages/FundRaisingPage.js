import React from 'react'
import NavigationComponent from '../components/CommonComponents/NavigationComponent';
import FundRaisingComponent from '../components/FundRaisingComponents/FundRaisingComponent';

export default function FundRaisingPage({theme,setTheme}) {
  return (
    <div>
      <h1 style = {{
        fontSize: '5em'
      }}>Page for Fund Raising</h1>
      <FundRaisingComponent theme = {theme}/>
    </div>
  )
}