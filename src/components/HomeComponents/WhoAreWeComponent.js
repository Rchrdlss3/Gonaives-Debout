import React from 'react'
import { FILLER_TEXT } from '../../helper/commonhelper'
import { titleStyle } from '../../helper/styles'

export default function WhoAreWeComponent({theme}) {
  return (
    <div>
        <h2 style = {titleStyle(theme,'2em')}>Who We Are</h2>
        <div style = {{              
          display: 'flex',
          justifyContent: 'center',
            alignItems: 'center',}}>
            <p style = {{
              textAlign: 'center',
              width: '80%'
        }}>
          {FILLER_TEXT}
          </p>
        </div>
    </div>
  )
}