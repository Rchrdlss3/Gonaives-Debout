import React from 'react'
import NavigationComponent from '../components/CommonComponents/NavigationComponent';
import WhoAreWeComponent from '../components/HomeComponents/WhoAreWeComponent';
import WelcomeComponent from '../components/HomeComponents/WelcomeComponent';
import VisionCard from '../components/HomeComponents/VisionCard';

export default function HomePage({theme,setTheme}) {
  let cardRows = []
  const cardTitle = ['Our Vision', 'Our Objective', 'How to Help']
  for (let i = 0; i <3; i++) {
    cardRows.push(<VisionCard theme = {theme} key = {i} title = {cardTitle[i]}/>) 
  }
  return (
    <div>
      <NavigationComponent theme = {theme} setTheme = {setTheme}/>
      <WelcomeComponent theme = {theme}/>
      <WhoAreWeComponent theme = {theme}/>
      <div style = {
        {
          display: 'flex',
          gap: '5%',
          justifyContent: 'center',
      }
        }>
        {cardRows}
      </div>  
      </div>
  )
}