import React from 'react'
import NavigationComponent from '../components/NavigationComponent';
import WhoAreWeComponent from '../components/HomeComponents/WhoAreWeComponent';
import WelcomeComponent from '../components/HomeComponents/WelcomeComponent';
import VisionCard from '../components/HomeComponents/VisionCard';

function HomePage() {
  let cardRows = []
  const cardTitle = ['Our Vision', 'Our Objective', 'How to Help']
  for (let i = 0; i <3; i++) {
    cardRows.push(<VisionCard title = {cardTitle[i]}/>) 
  }
  return (
    <div>
      <NavigationComponent />
      <WelcomeComponent />
      <WhoAreWeComponent/>
      <div style = {
        {
          display: 'flex',
          gap: '5%',
          justifyContent: 'center'
      }
        }>
        {cardRows}
      </div>  
      </div>
  )
}

export default HomePage