import React from 'react'
import WhoAreWeComponent from '../components/HomeComponents/WhoAreWeComponent';
import WelcomeComponent from '../components/HomeComponents/WelcomeComponent';
import VisionCard from '../components/HomeComponents/VisionCard';
import { cardRowStyle } from '../helper/styles';

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
      <div style = {cardRowStyle(theme,isMobile)}>
        {cardRows}
      </div>  
      </div>
  )
}