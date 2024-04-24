import React from 'react'
import {SLOGAN, TITLE } from '../../helper/commonhelper'
import { titleStyle, underTitleStyle } from '../../helper/styles'

export default function WelcomeComponent({theme}) {
  return (
    <div>
            <h1 style = {titleStyle(theme,'4em')}> 
            Welcome to {TITLE}
            </h1>
            <h2 style = {underTitleStyle(theme)}>{SLOGAN}</h2>
        <img 
            alt = "Image of civilians in Gonayiv" 
            src = "https://ayibopost.com/wp-content/uploads/2018/01/memorial2.jpg"
            style = {{
                width: '100%',
                height: '320px',
                objectPosition: '15% 80%',
                objectFit: 'cover'
            }}
            ></img>
    </div>
  )
}