import React, { useContext } from 'react'
import NavigationComponent from '../components/CommonComponents/NavigationComponent';
import FundRaisingComponent from '../components/FundRaisingComponents/FundRaisingComponent';
import { ThemeContext } from '../App';

export default function FundRaisingPage() {
  const [theme,setTheme] = useContext(ThemeContext)
  return (
    <div>
      <h1 style = {{
        fontSize: '5em'
      }}>Page for Fund Raising</h1>
      <FundRaisingComponent theme = {theme}/>
    </div>
  )
}