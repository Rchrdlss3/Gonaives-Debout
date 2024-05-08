import React from 'react'
import {SLOGAN, TITLE } from '../../helper/commonhelper'
import { titleStyle, underTitleStyle } from '../../helper/styles'

export default function WelcomeComponent({theme,isMobile}) {
  return (
    <div>
            <h1 style = {titleStyle(theme,isMobile ? '8em' :'4em')}> 
            Welcome to {TITLE}
            </h1>
            <h2 style = {underTitleStyle(theme,isMobile ? '4em' : null)}>{SLOGAN}</h2>
        <img 
            alt = "Image of Gonayiv" 
            src = "https://pbs.twimg.com/media/EZB3gzgWsAI5hsz.jpg"
            style = {{
                width: isMobile ? '90%' :'100%',
                height: isMobile ? '400px' : '320px',
                objectPosition: '15% 80%',
                objectFit: 'cover',
                borderRadius: isMobile ? '5px': null
            }}
            ></img>
    </div>
  )
}