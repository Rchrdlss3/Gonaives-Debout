import React from 'react'
import NavigationComponent from '../components/CommonComponents/NavigationComponent';
import ProjectsCard from '../components/ProjectsComponents/ProjectsCard';
import { FILLER_TEXT } from '../helper/commonhelper';

export default function ProjectsPage({theme,setTheme}) {
  const projectCards = [];
  for (let i = 0; i< 10; i++) {
    projectCards.push(<ProjectsCard />)
  }
  return (
    <div>
      <h1 style = {{
        fontSize: '5em',
        marginBottom: 0
      }}>
        Page for Projects
      </h1>
      <p style = {{
        width: '50%',
        margin: 'auto'
        }}>
          {FILLER_TEXT}
        </p>
      <div
      style = {{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
      }}
      >{projectCards}</div>
    </div>
  )
}