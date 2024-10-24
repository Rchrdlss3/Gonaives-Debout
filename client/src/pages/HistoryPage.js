import React, { useContext } from 'react'
import NavigationComponent from '../components/CommonComponents/NavigationComponent';
import HistoryComponent from '../components/HistoryComponents.js/HistoryComponent';
import { ThemeContext } from '../App';

function HistoryPage() {
  const [theme,setTheme] = useContext(ThemeContext)
  return (
    <div>
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