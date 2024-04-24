import React from 'react'
import NavigationComponent from '../components/CommonComponents/NavigationComponent';
import { mainStyle } from '../helper/styles';

export default function MarketingPage({theme,setTheme}) {
  return (
    <div>
      <NavigationComponent theme = {theme} setTheme = {setTheme}/>
      <h1 style = {{
        fontSize: '5em'
      }}>Page for Marketing</h1>
    </div>
  )
}