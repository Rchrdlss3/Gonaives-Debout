import React from 'react'
import NavigationComponent from '../components/CommonComponents/NavigationComponent';
import WhoAreWeComponent from '../components/HomeComponents/WhoAreWeComponent';
import WelcomeComponent from '../components/HomeComponents/WelcomeComponent';
import VisionCard from '../components/HomeComponents/VisionCard';

export default function HomePage({theme,isMobile}) {
  let cardRows = []
  const cardTitle = ['Our Vision', 'Our Objective', 'How to Help']
  for (let i = 0; i <3; i++) {
    cardRows.push(<VisionCard theme = {theme} key = {i} title = {cardTitle[i]} isMobile = {isMobile}/>) 
  }
  return (
    <div>
      <WelcomeComponent theme = {theme} isMobile = {isMobile}/>
      <WhoAreWeComponent theme = {theme}/>
      <div style = {
        {
          width : '100%',
          display: 'flex',
          flexDirection : isMobile ? 'column' : 'row',
          gap: '5%',
      }
        }>
        {cardRows}
      </div>  
      </div>
  )
}