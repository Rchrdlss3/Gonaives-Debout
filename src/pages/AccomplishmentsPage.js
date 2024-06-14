import React from 'react';
import NavigationComponent from '../components/CommonComponents/NavigationComponent';
import AccomplishmentCard from '../components/AccomplishmentsComponents/AccomplishmentCard';
import { FILLER_TEXT } from '../helper/commonhelper';

export default function AccomplishmentsPage({theme,setTheme}) {
  let accomplishments = [];

  for (let i = 0; i < 10; i++) {
    let accomplishmentTitle = `Accomplishment ${i+1}`
    accomplishments.push(<AccomplishmentCard title = {accomplishmentTitle} paragraph = {FILLER_TEXT}/>)
  } 
  return (
    <div>
      <h1 style = {{
        fontSize: '5em'
      }}>Page for Accomplishments</h1>
      <div style = {{
        display: 'flex',
        flexDirection: 'row',
        overflow: 'scroll',
        gap: 5
      }}>
      {accomplishments}
      </div>
    </div>
  )
}