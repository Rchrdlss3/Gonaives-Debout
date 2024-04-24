import React from 'react'
import NavigationComponent from '../components/CommonComponents/NavigationComponent';
import HistoryComponent from '../components/HistoryComponents.js/HistoryComponent';

function HistoryPage({theme,setTheme}) {
  return (
    <div>
      <NavigationComponent theme = {theme} setTheme = {setTheme}/>
      <h1 style = {{
        fontFamily: 'Dancing Script',
        marginBottom: 0,
        paddingBottom: 0,
        fontSize: '2em'
      }}>History</h1>
      <HistoryComponent theme = {theme}/>
    </div>
  )
}

export default HistoryPage