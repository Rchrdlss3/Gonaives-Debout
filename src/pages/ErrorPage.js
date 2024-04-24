import React from 'react';
import NavigationComponent from '../components/CommonComponents/NavigationComponent';

export default function ErrorPage({theme,setTheme}) {
  return (
    <div>
            <NavigationComponent theme = {theme} setTheme = {setTheme}/>
    </div>
  )
}